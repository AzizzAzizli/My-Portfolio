//! Header Navbar Items 
export interface navbarLinks {
    name: string;
    hash: string;
}

export const navbarLinks: navbarLinks[] = [
    {
        name: "Home",
        hash: "#",
    },


    {
        name: "About",
        hash: "#about",
    },


    {
        name: "Tech Stack",
        hash: "#techstack",
    },


    {
        name: "Projects",
        hash: "#projects",
    },


    {
        name: "Contact",
        hash: "#contact",
    }
];



//! Technologies 
export interface technologiesData {
    technology: string;
    documentation: string;
    logo: string;
}

export const technologiesData: technologiesData[] = [
    {
        technology: "Git",
        documentation: "https://git-scm.com/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },


    {
        technology: "HTML5",
        documentation: "https://www.w3.org/html/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },


    {
        technology: "CSS3",
        documentation: "https://www.w3schools.com/css/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },


    {
        technology: "Bootstrap",
        documentation: "https://getbootstrap.com/",
        logo: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
    },


    {
        technology: "Tailwind CSS",
        documentation: "https://tailwindcss.com/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },


    {
        technology: "JavaScript",
        documentation: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },


    {
        technology: "Vite",
        documentation: "https://vitejs.dev/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    },


    {
        technology: "React",
        documentation: "https://react.dev/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },


    {
        technology: "Next.js",
        documentation: "https://nextjs.org/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },


    {
        technology: "Redux",
        documentation: "https://redux.js.org",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    },

    {
        technology: "Firebase",
        documentation: "https://firebase.google.com/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    },

    {
        technology: "Figma",
        documentation: "https://www.figma.com/community/tag/web",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },

    {
        technology: "Postman",
        documentation: "https://www.postman.com/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
        technology: "Node.js",
        documentation: "https://nodejs.org/en",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
        technology: "MongoDB",
        documentation: "https://www.mongodb.com/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
        technology: "Socket.Io",
        documentation: "https://socket.io/",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
    },
    
 
];


//! Projects

export interface projectsData {
    image: string,
    name: string,
    technologies: string,
    githubLink: string,
    vercelLink: string,
}

export const projectsData: projectsData[] = [
    {
        image: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1712880000&semt=ais",
        name: "Foody Project",
        technologies: " NextJS , Typescipt, Tailwind",
        githubLink: "https://github.com/izzatmammadov/Foody-App",
        vercelLink: "https://foody-app-izzats-projects.vercel.app/"
    },


    {
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LYTRT59meHGhdhDIMuTcDgHaFj%26pid%3DApi&f=1&ipt=2ea8d46a624e46a728a54e53cd635b756050e6a713df2c9f7189c025fbc53870&ipo=images",
        name: "Music App",
        technologies: "React, React Query ",
        githubLink: "https://github.com/AzizzAzizli/ReactQuery-Music-APP",
        vercelLink: "https://music-app-rho-nine.vercel.app/"
    },

    {
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9EgQC5WESQcyk1HBdE7WpgHaHa%26pid%3DApi&f=1&ipt=fa65636c8004727fe7e75d031f87926ddcb42972d99da8cec22c247cebb33bb4&ipo=images",
        name: "Stopwatch ",
        technologies: "Html5 , Css3 , Javascript",
        githubLink: "https://github.com/AzizzAzizli/stopwatch",
        vercelLink: "https://azizzazizli.github.io/stopwatch/"
    },

    {
        image: "https://cdn.vox-cdn.com/thumbor/9vV8SbBMxnaIYaiGNhoRyys2OpY=/0x0:2429x2396/1200x0/filters:focal(0x0:2429x2396):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/3488502/shutterstock_106919999.0.jpg",
        name: "Rock Paper Scissors Game",
        technologies: " Html5 , Css3 , Javascript",
        githubLink: "https://github.com/AzizzAzizli/Rock-Paper-Scissors_JS",
        vercelLink: "https://azizzazizli.github.io/Rock-Paper-Scissors_JS/"
    },

    {
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.xZlEIrZ8dkd6hTELyf80xQHaDn%26pid%3DApi&f=1&ipt=3fd2c3ff26443cc7552b38e8fd02ac6bd1e9fcc6f395e28fff9c6dd46e6b2e26&ipo=images",
        name: "Hangman",
        technologies: " Html5 , Css3 , Javascript",
        githubLink: "https://github.com/AzizzAzizli/Hangman-Game",
        vercelLink: "https://azizzazizli.github.io/Hangman-Game/"
    },
    {
        image: "https://www.parliament.uk/contentassets/aa8b9933d3cb4364b827e7a60ea898e0/hl_library_roger-harris2022.jpg?width=1000&quality=85",
        name: "Library ",
        technologies: " Html5 , Css3 , Javascript , Firebase",
        githubLink: "https://github.com/izzatmammadov/Library",
        vercelLink: "https://izzatmammadov.github.io/Library/"
    },
    {
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis5-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple122%2Fv4%2F8c%2Fea%2F77%2F8cea777a-f3ab-7500-3ed4-38f87371138c%2FAppIcon-0-1x_U007emarketing-0-7-0-85-220.png%2F512x512bb.jpg&f=1&nofb=1&ipt=79ef8c5afee63753e87812594604f4fe98372dc039629c4c88acca08916dcdf9&ipo=images",
        name: "ChatApp ",
        technologies: "React.js, Node.js, MongoDB, Socket.Io",
        githubLink: "https://github.com/AzizzAzizli/ChatApp",
        vercelLink: "https://github.com/AzizzAzizli/ChatApp"
    },
]