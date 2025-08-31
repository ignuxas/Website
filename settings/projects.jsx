import edullectus from "../public/images/edullectus.png"
import armilla from "../public/images/Armilla3.png"
import lawcare from "../public/images/lawcare.png"
import thunderclap from "../public/images/tclwebb.png"
import cansat from "../public/images/cansat.jpg"
import nukesnshit from "../public/images/nukesnshit.png"
import fridge from "../public/images/FridgeSmall.jpg"
import pgl from "../public/images/PGL.png"
import fuelmap from "../public/images/FuelMap2.png"
import aimbot from "../public/images/Aimbot.png"
import chemistry from "../public/images/Chemistry.jpg"
import detection from "../public/images/Detection1.jpg"
import corona from "../public/images/Corona.jpg"
import emojibot from "../public/images/EmojiBot.png"
import pianobot from "../public/images/PianoBot.jpg"
import arduino from "../public/images/Arduino.jpg"
import rust from "../public/images/Rust.png"
import cargame from "../public/images/CarGame.jpg"

export const projects = [
    {
        title: 'Edullectus',
        subTitle: "Web Development / AI",
        description: "Are you a young adult feeling unsure about your next step? Educare is here to help! Our AI-powered platform provides personalized insights to guide you towards the perfect educational path and a fulfilling career that aligns with your unique goals and aspirations. By analyzing your interests, skills, and preferences, Educare offers tailored recommendations for courses, universities, and career opportunities. With Educare, you can confidently take the next step towards a bright and successful future.",
        image: edullectus,
        tags: ["AI (LLM - Gemini)", "Next", "PostgreSQL", "Tailwind", 'Python'],
        mainLink: 'https://edullectus.com/',
        links: {
            website: 'https://edullectus.com/',
        }
    },
    {
        title: 'Armilla',
        subTitle: "Web Development",
        description: "Presenting a fully functional online store prototype that offers users a seamless shopping experience. This prototype enables users to effortlessly browse a wide range of products, add them to their cart, and simulate the purchase process using the secure payment processing platform, <a href='https://stripe.com/' target='_blank' rel='noopener noreferrer' class='aBlue'>Stripe</a>. Note that it does not initiate any actual charges. The website boasts a sleek and modern design, coupled with an intuitive navigation system, ensuring a user-friendly experience. Additionally, the inclusion of essential legal documents ensures compliance and builds trust with customers.",
        image: armilla,
        tags: ['React', 'Node', 'Express', "JavaScript", "MongoDB"],
        mainLink: 'https://armilla.ignuxas.com/',
        links: {
            github: 'https://github.com/ignuxas/Armilla',
            website: "https://armilla.ignuxas.com/"
        }
    },
    {
        title: 'Lawcare',
        subTitle: "Web Development / AI",
        description: "A tool designed to help users find relevant case law that matches their specific legal issues using artificial intelligence. This AI-powered legal assistant analyzes legal texts, identifies key precedents, and provides tailored case law recommendations, streamlining legal research for lawyers, businesses, and individuals. By leveraging advanced machine learning, it ensures accurate and efficient access to judicial decisions, saving time and improving legal strategy development.",
        image: lawcare,
        tags: ["OpenAI", "Next", "PostgreSQL", "Tailwind", 'Python'],
        mainLink: 'https://lawcare.netlify.app',
        links: {
            website: 'https://lawcare.netlify.app'
        },
    },
    {
        title: 'Thunderclap Labs',
        subTitle: "Web development",
        description: "Co-founded Thunderclap labs, Thunderclap Labs is at the forefront of innovation, developing critical technologies to solve complex global challenges. We build the platforms and systems that will define the next era of atmospheric management, aerospace capability, and beyond - Pioneering the next era of aerospace with a focus on rocket propulsion technologies, advanced launch systems, and sustainable aerospace solutions.",
        image: thunderclap,
        tags: ["AI (LLM - Gemini)", "Next", "PostgreSQL", "Tailwind", 'Python'],
        mainLink: 'https://thunderclaplabs.com/',
        links: {
            website: 'https://thunderclaplabs.com/',
            github: 'https://github.com/Thunderclap-Labs/website'
        }
    },
    {
        title: "Nukes n' shit",
        subTitle: "Web Development",
        description: "I was introtuced to a group of urban explorers and past preservers who wanted to showcase their adventures and sell their merchandise online. I created a website for them that featured a <a href='https://nukesnshit.com/blog' target='_blank' rel='noopener noreferrer' class='aBlue'>blog</a> section where they could share their stories and photos, and a <a href='https://www.skelbiu.lt/' target='_blank' rel='noopener noreferrer' class='aBlue'>shop</a> section where they could sell their products. I enjoyed working on this project and learned a lot as it was challenging and rewarding.",
        image: nukesnshit,
        tags: ['Javascript', 'React', 'Next', "Node", "Strapi", "GraphQL"],
        mainLink: 'https://nukestore.vercel.app/',
        links: {
            website: "https://nukestore.vercel.app/"
        }
    },
    {
        title: 'Thunderclap Cansat v1',
        subTitle: "Robotics / Software Development",
        description: "We built a satellite. Why? How? - I have no clue. We are still perplexed by the fact that it actually worked. just like... - to turn it on you have to flip three switches at specific intervals for it to boot up, because we used an interface that does NOT support data transfer, but we somehow did it anyway... It also blew up two times, which was fun.",
        image: cansat,
        tags: ['Python', 'React', 'Node', 'MySQL', 'Arduino (C++)'],
        mainLink: 'https://www.youtube.com/watch?v=AwtJzvZ51m0',
        links: {
            youtube: 'https://www.youtube.com/watch?v=AwtJzvZ51m0',
            github: 'https://github.com/ignuxas/Thunderclap-Cansat'
        },
    },
    {
        title: 'Mini Smart Fridge',
        subTitle: "Robotics / Software Development",
        description: "For our school's yearly student project showcase, my friend and I developed a mini smart fridge. My friend was responsible for installing the electronics, while I wrote the code to control the fridge's various functions. The fridge's screen displays its current temperature, and there is a lock feature to prevent unauthorized access. Additionally, the fridge has two lighting modes: one that uses RGB lighting, and another that displays colors corresponding to the current temperature inside the fridge. Overall, our project turned out perfectly and we are proud of the results.",
        image: fridge,
        tags: ['Arduino', 'C++', 'Wood'],
        mainLink: 'https://drive.google.com/drive/folders/1Rx6soLrsUmhCqM45BhdIxT6KlD43HZLu',
        links: {
            drive: 'https://drive.google.com/drive/folders/1Rx6soLrsUmhCqM45BhdIxT6KlD43HZLu'
        }
    },
    {
        title: 'Project Green',
        subTitle: "Software Development",
        description: "Introducing a new and innovative app for keeping track of the latest products on <a href='https://www.skelbiu.lt/' target='_blank' rel='noopener noreferrer' class='aBlue'>Skelbiu.lt</a> and <a href='https://autoplius.lt/' target='_blank' rel='noopener noreferrer' class='aBlue'>Autoplus.lt</a>. This lightweight app features a sleek translucent acrylic background, quick-resize buttons, and an always-on-top option for easy access. With highly customizable settings, you can tailor the app to your specific needs and preferences. Whether you're in the market for a new car or looking to purchase used items, this app is a powerful tool when used correctly. Stay tuned for its release in the near future.",
        image: pgl,
        tags: ['Tauri', 'React', 'Rust'],
        mainLink: '',
        links: {}
    },
    {
        title: 'Fuel Station Map',
        subTitle: "Web Development",
        description: "A fuel station map website that displays a comprehensive list of fuel stations and their prices in the Baltic countries. By using this tool, you can easily find the nearest fuel station and check the prices for different types of fuel. The website also indicates whether the prices at each station are above or below the average for the region.",
        image: fuelmap,
        tags: ['Python', 'JavaScript', 'Express', 'React', 'Node', 'MySQL'],
        mainLink: 'https://fuelmap.ignuxas.com/',
        links: {
            github: 'https://github.com/ignuxas/FuelMap',
            website: 'https://fuelmap.ignuxas.com/'
        },
    },
    {
        title: 'Pixel Aimbot',
        description: "This app is designed to lock onto enemies on the screen without reading the game's memory. It works by analyzing the screen in real-time, identifying the brightest pixels, and calculating the middle of those pixels to determine the location of enemies. This process is repeated more than 240 times per second, allowing the app to provide fast and accurate tracking of enemies.",
        image: aimbot,
        tags: ['Python', 'OpenCV'],
        mainLink: '',
        links: {
            github: 'https://github.com/ignuxas/Pixel-Aimbot',
            youtube: 'https://www.youtube.com/watch?v=AZhiZTF3tSw'
        }
    },
    {
        title: 'Chemistry App',
        description: "The Chemistry App is an innovative tool that helps you find chemical compounds based on their name. It features an integrated language translator that allows you to easily enter a chemical formula and see the corresponding symbols and letters. This is especially useful for students who are learning chemistry in a language that is not their first.",
        image: chemistry,
        tags: ['Python', 'Javscript'],
        mainLink: '',
        links: {
            youtube: 'https://www.youtube.com/watch?v=ktqcvM8IQYM'
        }
    },
    {
        title: 'Lane Detection',
        description: "Our road lane detection app uses image processing and Python/openCV to accurately identify and track road lanes from images, recordings, and screen feeds. It employs Houghlines and masks to filter out irrelevant information and provide reliable results.",
        image: detection,
        tags: ['Python', 'OpenCV'],
        mainLink: '',
        links: {
            youtube: 'https://www.youtube.com/watch?v=4UvUZnxkEps'
        }
    },
    {
        title: 'Corona Case Meter',
        description: "A Covid-19 tracker app that provides real-time data on the number of cases, new cases, and deaths in a specific country. I developed this app to help people stay informed and take necessary precautions to protect themselves and others. This app is useful for healthcare professionals, travelers, and anyone looking to stay up-to-date on the latest developments related to Covid-19.",
        image: corona,
        tags: ['Python', 'Javscript'],
        mainLink: '',
        links: {
            youtube: 'https://www.youtube.com/watch?v=Rm4nPTkpzvY'
        }
    },
    {
        title: 'Discord EmojiBot',
        description: "This Discord bot is designed to make it easy to participate in giveaways and other events on the platform. It works by automatically reacting to posts with the first available reaction, allowing you to quickly and easily enter giveaways and other events. The bot is programmed to scan text channels at a user-defined interval, ensuring that you don't miss any opportunities to participate.",
        image: emojibot,
        tags: ['Python'],
        mainLink: '',
        links: {
            github: 'https://github.com/ignuxas/Discord-Auto-Emoji'
        }
    },
    {
        title: 'Piano Tiles Bot',
        description: "Piano Tiles bot is a tool that automatically clicks on the black pixels to play the game. It has customizable settings that allow users to adjust its performance and optimize it for different game modes and challenges. One of the unique features of our bot is its high speed, which sets it apart from other bots of its kind.",
        image: pianobot,
        tags: ['Python', 'OpenCV', 'JavaScript'],
        mainLink: '',
        links: {
            youtube: 'https://www.youtube.com/watch?v=XPr-jDqTVKo',
            download: 'https://mega.nz/file/iCxBnajB#XGnKAvY_bnPMlEe1XyIMuczGlBEjIhjEeYkCC_gBlJc'
        }
    },
    {
        title: 'Arduino Macro Keyboard',
        description: "I developed a project that connects an Arduino Uno to Python, allowing users to control their computer using the Arduino. This setup enables a wide range of actions, such as changing volume, opening and closing apps, and locking and unlocking the computer. This project showcases my skills in both Python and Arduino and demonstrates the potential for creating interactive and automated systems.",
        image: arduino,
        tags: ['C++', 'Python', 'Arduino'],
        mainLink: '',
        links: {}
    },
    {
        title: 'Pixel Painter',
        description: "I developed a side project that uses image processing techniques to draw an image pixel by pixel in the game Rust. Currently, the project only supports black and white, but there is potential to add color in the future. Despite being inefficient, this project was faster than the competition - <a href='http://www.rustangelo.com/' target='_blank' rel='noopener noreferrer' class='aBlue'>Rustangelo</a>, at the time of development. This project showcases my skills in image processing and demonstrates my ability to create innovative solutions for specific needs.",
        image: rust,
        tags: ['Python', 'OpenCV'],
        mainLink: '',
        links: {}
    },
    {
        title: 'Discord Status Rotator',
        description: "This app automatically changes your discord status. The app will automatically rotate through the quotes at a user-defined interval. This is a great way to add some flair to your Discord profile and keep your status fresh and engaging.",
        image: '',
        tags: ['Python'],
        mainLink: '',
        links: {
            github: 'https://github.com/ignuxas/DiscordStatusBot'
        }
    },
    {
        title: 'Car Game',
        description: "During a two-week school project, I led a team of four in the development of a game for Windows and Android devices. As the leader, programmer, and UI specialist, I played a key role in the planning, execution, and testing of the game. Working in a team environment was a valuable experience, and I learned a lot about the process of developing a game from start to finish.",
        image: cargame,
        tags: ['C#', 'Unity'],
        mainLink: '',
        links: {}
    },
    {
        title: 'Y8 Score Exploit',
        description: "While playing a game on <a href='http://www.y8.com/' target='_blank' rel='noopener noreferrer' class='aBlue'>Y8</a>, I was interested in how the score system worked, so I explored the source code, reverse engineered it, and found a way to manipulate the score. When the website made a request to get the main script, I re-directed it to my own script, which would then manipulate the score.",
        image: '',
        tags: ['Javascript', 'Reverse Engineering'],
        mainLink: '',
        links: {}
    },
]