"use client";

import Head from 'next/head'
import { useState, useEffect } from 'react';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { settings } from '../settings/particles';

import { isMobile } from 'react-device-detect';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faFacebookF, faLinkedin, faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faCircleArrowDown, faBars } from '@fortawesome/free-solid-svg-icons';

//experience
import { experience } from '../settings/experience';

//projects
import { projects } from '../settings/projects';

//aos
import AOS from 'aos';
import 'aos/dist/aos.css';

//loading
import Loading from './loading';

// variables
var FeaturedProjectCount = 8 - 1; // -1 because of array index

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const particlesInit = async (main) => {await loadFull(main);};

  var prevScrollpos = 0;

  var skills = [ "Python", "JavaScript", "React.js", "Vue.js", "Node.js", "Next.js", "PHP", "SQL", "noSQL", "GraphQL", "MongoDB", "HTML", "CSS", "Tailwind" ];
  var knowHows = [ "C#", "C++", "Rust", "Unity", "PyTorch", "Tensorflow", "Blender", "Fusion 360" ];

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
    setTimeout(AOS.refresh, 2600);
    prevScrollpos = window.pageYOffset;
    window.onscroll = function() {scrollFunction()};
  }, []);

  var count = 0;
  function getDelayNoIndex (resetCounter = false, amount = 50) {
    if (resetCounter) {count = 0; return count;}
    count += amount;
    return count;
  }

  function getDelay(index, amount = 50){
    return index * amount;
  }

  function ScrollToElement(id, center = true){
    if(center) document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
    else document.getElementById(id).scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
  }

  function scrollFunction() {
    var currentScrollPos = window.pageYOffset;
    const navBar = document.getElementById("navbar");
    const logo = document.getElementById("logo");
    //navbar height change
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      setTimeout(() => {
      navBar.style.height = "70px";
      logo.style.height = "80px";
      }, 100);
    } else {
      navBar.style.height = "90px";
      logo.style.height = "90px";
    } //navbar hide on scroll
    if (prevScrollpos > currentScrollPos) {navBar.style.top = "0";} 
    else {navBar.style.top = `-${navBar.style.height}`;}
    prevScrollpos = currentScrollPos;
  }

  function getFadeDir(index, type = 'object'){
    if(isMobile) return 'fade-right';
    if(type == 'object'){
      if (index % 2 == 0) {
          return 'fade-left';
        } else {
          return 'fade-right';
        }
      } else {
        if (index % 2 == 0) {
          return 'fade-right';
        } else {
          return 'fade-left';
        }
    }
  }

  return (
    <>
      <Head>
        <title>Ignas Mikolaitis</title>
        <link rel="icon" href="/favicon.png" sizes="any" type="image/svg+xml"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Loading />

      <header id="navbar">
        <nav id="navigation">
          <img src="/images/signatureTransparent180x180.png" 
            alt="logo" 
            id="logo" 
            onClick={() => ScrollToElement('start')}/>
          <div id="headerLinks">
            <ol>
              <li onClick={() => ScrollToElement(`about`, !isMobile)}><span>About</span></li>
              <li onClick={() => ScrollToElement('experience', false)}><span>Experience</span></li>
              <li onClick={() => ScrollToElement('featured', false)}><span>Projects</span></li>
              <li onClick={() => ScrollToElement('contact', false)}><span>Contact</span></li>
              <li><a href="https://drive.google.com/drive/folders/12ZZoDzJbtANAawd0Df_NRFKwm9xBpFw3?usp=share_link" target="_blank">
                <button style={{margin: "0 10px", marginRight: "0", padding: "14px 20px"}}>Resume</button>
              </a>
              </li>
            </ol>
          </div>
          <div id='MenuBtn' onClick={() => setMenuOpen(true)}><FontAwesomeIcon icon={faBars} /></div>
        </nav>
      </header>
      <div id='MenuBg' className={menuOpen ? "open" : ""} onClick={() => setMenuOpen(false)}/>
      <div id='Menu' className={menuOpen ? "open" : ""}>
        <div className='menuHeader'>
          <div id='MenuLogo' onClick={() => ScrollToElement('start')}>Menu</div>
          <div id='MenuClose' onClick={() => setMenuOpen(false)}>X</div>
        </div>
        <ol>
          <li onClick={() => {ScrollToElement(`hero`, false); setMenuOpen(false);}}><span>Home</span></li>
          <li onClick={() => {ScrollToElement(`about`, false); setMenuOpen(false);}}><span>About me</span></li>
          <li onClick={() => {ScrollToElement('experience', false); setMenuOpen(false);}}><span>Experience</span></li>
          <li onClick={() => {ScrollToElement('featured', false); setMenuOpen(false);}}><span>Projects</span></li>
          <li onClick={() => {ScrollToElement('contact', false); setMenuOpen(false);}}><span>Contact</span></li>
        </ol>
        <a href="https://drive.google.com/drive/folders/12ZZoDzJbtANAawd0Df_NRFKwm9xBpFw3?usp=share_link" target="_blank">
          <button style={{margin: "0 20px", padding: "18px 0", width:"calc(100% - 40px)"}}>Resume</button>
        </a>
      </div>

      <div id="Socials" className='sideLine'>
        <a href='https://github.com/ignuxas' target="_blank" rel="noopener noreferrer" key="github"><FontAwesomeIcon icon={faGithub} /></a>
        <a href='https://www.youtube.com/@ThunderclapLabs' target="_blank" rel="noopener noreferrer" key="youtube"><FontAwesomeIcon icon={faYoutube} /> </a>
        <a href='https://www.facebook.com/ignuxas/' target="_blank" rel="noopener noreferrer" key="facebook"><FontAwesomeIcon icon={faFacebookF}/></a>
        <a href='https://www.linkedin.com/in/ignas-mikolaitis/' target="_blank" rel="noopener noreferrer" key="linkedin"><FontAwesomeIcon icon={faLinkedin}/></a>
      </div>

      <div id="ContactLine" className='sideLine'>
        <a href='mailto:mikolaitis.ignas@gmail.com' target="_blank" rel="noopener noreferrer">
          mikolaitis.ignas@gmail.com
        </a>
      </div>

      <main id="start">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={settings}
        />
        <section id="hero">
          <div className='heading'>Hey, my name is</div>
          <div className='title bigger'>
              <div>Ignas Mikolaitis <br/></div>
              <div className='titleSubtitle'>and I code ¯\_(ツ)_/¯.</div>
          </div>
        </section>

        <svg className="waves" xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18
              88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(13,17,23,0.7" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(13,17,23,0.5)"
              />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(13,17,23,0.3)"
                />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#0D1117" />
          </g>
        </svg>
      </main>
      <div id='wrapper'>
        <div id="content">
            <section id="about">
              <div className='numberedHeading' data-aos="fade-right">About Me</div>
              <div className='aboutContent'>
                <div id="aboutText">
                  <p data-aos="fade-right">
                    Hi there! I'm Ignas, a self-taught software engineer based in Kaunas, Lithuania, currently
                    studying Computer Science & Cyber Security Engineering @ <a className='aBlue' href='https://ktu.edu/' target="_blank" rel="noopener noreferrer">KTU</a>.
                    I've had a thing for tech since I was young, and since then I have taught myself to code 
                    in various programming languages.
                  </p>
                  <p data-aos="fade-right">
                  I've had the pleasure of working on some noteworthy projects, including <span onClick={() => ScrollToElement("projectImg-Fuel_Station_Map")} className='aBlue' href=''>Fuel Map</span> which is a gas station map providing real-time prices. There's also&nbsp;
                  <span className='aBlue' onClick={() => ScrollToElement("projectImg-Project_Green")} href=''>Project Green</span>, an app designed to showcase the latest listings from specific websites. Plus, I crafted <span className='aBlue' onClick={() => ScrollToElement("projectImg-Armilla")} href=''>Armilla</span>, a fully functional online store prototype.
                  I also have cyber-security experience and hold a prestigious placement on the <a className='aBlue' href='https://bughunters.google.com/leaderboard/honorable-mentions' target="_blank" rel="noopener noreferrer">Google Bug Bounty</a> Honorable Mentions List.
                  </p >
                  <p data-aos="fade-right">
                    When I'm not coding, you'll find me building robots, working on cool projects, and soaking up new knowledge.
                   I'm excited to bring my skills and enthusiasm to projects that challenge the norm and keep tech moving forward.
                  </p>
                </div>
                <div id="skills">
                  <div className='aboutContentTitle'>
                    <div className='numberedHeading numberedHeadingSmall' data-aos="fade-right">My Skills</div>
                    <div className='skillList' id="skillList">
                      <ul>
                        {skills.map((skill, index) => (
                          <li data-aos="fade-right" data-aos-anchor='#skillList' data-aos-delay={getDelayNoIndex(index == 0 ? true:false)} key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                    <div className='numberedHeading numberedHeadingSmall numberedHeading2' data-aos="fade-right">Know-Hows</div>
                    <div className='skillList' id='skillList2'>
                      <ul>
                        {knowHows.map((skill, index) => (
                          <li data-aos="fade-right" data-aos-anchor='#skillList2' data-aos-delay={getDelayNoIndex(index == 0 ? true:false)} key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="experience">
                <div className='numberedHeading numberedHeading2' data-aos="fade-right">Experience</div>
                  <div className='experienceContent'>
                      {
                        experience.map((exp, index) => (
                          <div className={`experienceCard ${exp.position.includes("Intern") && "alt"}`} key={index}>
                            <div className="experienceCardTitle">
                              <span className="titleColor experienceCardTitleText aos-init aos-animate" id={`Experience${index}`} data-aos="fade-left" data-aos-delay={getDelayNoIndex(true, 100)}>
                                {exp.position}&nbsp;
                                <span className="textBlue glow">@</span>&nbsp;<a href={exp.companyURL} className="aBlue titleColor" target="_blank">{exp.company}</a></span>
                                {exp.image && (
                                  <img src={`images/${exp.image}`} data-aos-anchor={`#Experience${index}`} className={`experienceCardLogo ${exp.glowClass}`} data-aos="fade-down" data-aos-delay={getDelayNoIndex(true, 100)}/>
                                )}
                              </div>
                              {exp.achievements && (
                                <ul>
                                  {exp.achievements.map((desc, descIndex) => (
                                    <li data-aos="fade-right" key={descIndex} data-aos-anchor={`#Experience${index}`} data-aos-delay={getDelayNoIndex(false, 100)} className="aos-init aos-animate">
                                      <div dangerouslySetInnerHTML={{__html: desc}} />
                                    </li>
                                  ))}
                                </ul>
                              )}
                            <div className="verticalLineContainer aos-init aos-animate" data-aos="height0to100" data-aos-anchor={`#Experience${index}`} data-aos-delay="300" data-aos-duration="120" data-aos-easing="ease-out">
                              <div className={`verticalLine ${(index === 0 || index === 1) && 'fill'}`}></div>
                            </div>
                            <span className="date" data-aos-anchor={`#Experience${index}`} data-aos="fade-up" data-aos-delay={getDelayNoIndex(false, 50)}>{exp.startDate} - {exp.endDate}</span>
                          </div>
                        ))
                      }
                </div>

            </section>
            <section id="featured">
              <div className='numberedHeading numberedHeading3' data-aos="fade-right">Some Things I’ve Built</div>
              <div id="projectShowcase">
                {projects.map((project, index) => (
                  <>
                  {index <= FeaturedProjectCount ? (
                  <div className={index % 2 == 0 ? "featuredProject":"featuredProject left"} key={index} id={`FeaturedProject${index}`}>
                    {isMobile ? (<></>):(
                      <div className='projectImgWrapper'>
                        <div className='projectImg' data-aos={getFadeDir(index, 'image')} data-aos-anchor={`#FeaturedProject${index}`}>
                          <a href={project.mainLink} target="_blank" rel="noopener noreferrer">
                            <img alt="" id={`projectImg-${project.title.replaceAll(" ", "_")}`} src={project.image.src}></img>
                          </a>
                        </div>
                      </div>
                    )}
                    <div className='properties'>
                      <div className='projectOverline' data-aos-anchor={`#FeaturedProject${index}`} data-aos={getFadeDir(index)} data-aos-delay={getDelayNoIndex(true, 50)}>{project.subTitle ? project.subTitle : 'Featured Project'}</div>
                      <div className='projectHeader'>
                        <h3 className='projectTitle' data-aos-anchor={`#FeaturedProject${index}`} data-aos={getFadeDir(index)} data-aos-delay={getDelayNoIndex(false, 100)}>
                          {project.mainLink != "" ? (
                            <a href={project.mainLink} className='aBlue titleColor'>{project.title}</a>
                          ):(<>{project.title}</>)}
                        </h3>
                        <div className='projectLinks'>
                          {Object.keys(project.links).map((key, keyIndex) => (
                            <div className='linkCircle' data-aos="fade-up" key={`${index}-${key}`} data-aos-delay={200 + 50 * keyIndex}>
                              <a href={project.links[key]} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon 
                              icon={
                                key == 'drive' ? (faGoogleDrive):
                                key == 'github' ? (faGithub):
                                key == 'youtube' ? (faYoutube):
                                key == 'website' ? (faGlobe):
                                key == 'download' ? (faCircleArrowDown):
                                (<></>)
                              }/></a>
                            </div>
                          ))
                          }
                        </div>
                      </div>
                      {isMobile ? (
                      <div className='projectImgWrapper'>
                        <div className='projectImg' alt="" id={`projectImg-${project.title.replaceAll(" ", "_")}`} data-aos={getFadeDir(index, 'image')} data-aos-anchor={`#FeaturedProject${index}`} data-aos-delay={getDelayNoIndex(false, 100)}>
                          <img src={project.image.src}></img>
                        </div>
                      </div>):(<></>)}
                      <div className='projectDescription' data-aos-anchor={`#FeaturedProject${index}`} data-aos={getFadeDir(index)} data-aos-delay={getDelayNoIndex(false, 150)}>
                        <p dangerouslySetInnerHTML={{__html: project.description}} />
                      </div>
                      <div className='projectTags'>
                        {project.tags.map((tag, tagIndex) => (
                          <div className='projectTag' key={`featured-${index}-${tag}`} data-aos-delay={getDelay(tagIndex)} data-aos="fade-down">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  ):(<></>)}
                  </>
                ))}
              </div>
            </section>
            <section id="otherProjects">
              <div className='titleMid' data-aos="fade-down">Other Noteworthy Projects</div>
              <div id='otherProjectShowcase'>
              {projects.map((project, index) => (
                  <>
                  {index > FeaturedProjectCount && index < FeaturedProjectCount+7 || index > FeaturedProjectCount && showMore ? (
                  <div className='otherProject card' key={index} data-aos="fade-down" data-aos-delay={(index-FeaturedProjectCount-1) % 3 == 0 ? (getDelayNoIndex(true)):(getDelayNoIndex())}>
                    <div className='otherProjectImgWrapper'><img className="otherProjectImg" src={`images/${project.image}`} alt="" /></div>
                    <div className='otherProjectTitle'>{project.title}</div>
                    <p className='otherProjectDescription' dangerouslySetInnerHTML={{__html: project.description}}></p>
                    <div className='projectTags left'>
                      {project.tags.map((tag, tagIndex) => (
                        <div className='projectTag' key={`other-${index}-${tag}`}>
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div className='background' />
                    <div className='multi-button'>
                      {project.links.drive ? (<a href={project.links.drive} target="_blank" rel="noopener noreferrer" key={`${index}-drive`}><FontAwesomeIcon icon={faGoogleDrive}/></a>):(<></>)}
                      {project.links.github ? (<a href={project.links.github} target="_blank" rel="noopener noreferrer" key={`${index}-github`}><FontAwesomeIcon icon={faGithub}/></a>):(<></>)}
                      {project.links.youtube ? (<a href={project.links.youtube} target="_blank" rel="noopener noreferrer" key={`${index}-youtube`}><FontAwesomeIcon icon={faYoutube}/></a>):(<></>)}
                      {project.links.website ? (<a href={project.links.website} target="_blank" rel="noopener noreferrer" key={`${index}-website`}><FontAwesomeIcon icon={faGlobe}/></a>):(<></>)}
                      {project.links.download ? (<a href={project.links.download} target="_blank" rel="noopener noreferrer" key={`${index}-download`}><FontAwesomeIcon icon={faCircleArrowDown}/></a>):(<></>)}
                    </div>
                  </div>
                  ):(<></>)}
                  </>
                ))}
              </div>
              <div className='center'>
                <button className='ShowMore' onClick={() => {showMore ? (setShowMore(false)):(setShowMore(true))}}>
                    {showMore ? ("Show Less"):("Show More")}
                </button>
              </div>
            </section>
            <section id="contact">
              <div className='overline' data-aos="fade-down">What’s Next?</div>
              <div className='title' data-aos="fade-down"><h1>Get In Touch</h1></div>
              <p data-aos="fade-down">My inbox is always open, whether you have a question, offer or just want to say hi, I’ll try my best to get back to you!</p>
              <a href='mailto:mikolaitis.ignas@gmail.com' target="_blank" rel="noopener noreferrer" data-aos="fade-down"><button>Say Hello</button></a>
            </section>
            <footer>
              <div id="mobileSocials">
                <a href='https://github.com/ignuxas' target="_blank" rel="noopener noreferrer" key="mobile-github"><FontAwesomeIcon icon={faGithub} /></a>
                <a href='https://www.youtube.com/@crayonsniffer' target="_blank" rel="noopener noreferrer" key="mobile-youtube"><FontAwesomeIcon icon={faYoutube} /> </a>
                <a href='https://www.facebook.com/ignuxas/' target="_blank" rel="noopener noreferrer" key="mobile-facebook"><FontAwesomeIcon icon={faFacebookF}/></a>
              </div>
              <a href='https://github.com/ignuxas' target="_blank" rel="noopener noreferrer"><div className='footerContent'>Built By: Ignas Mikolaitis</div></a>
            </footer>
          </div>
        </div>
    </>
  )
}
