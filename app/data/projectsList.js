/* format:
    {
        company: "COMPANY NAME",
        title: "PROJECT TITLE",
        dashed: true or false,
        description: [
            "TAGLINE",
            ["SECTION TITLE", "SECTION DESCRIPTION"],
        ],
        technologies: ["TECHNOLOGY 1", "TECHNOLOGY 2"],
        image: "./linktosplashimage",
        additionalInfo: {
            link: "https link or ./link",
            images: [
                "./images/design-portfolio/projects/mySite/pages.png",
            ],
            videos: [
                "youtube embed url",
            ]
        }
    }
*/

const projectsList = [
    {
        company: "PERSONAL",
        title: "MY WEBSITE",
        dashed: true,
        description: [
            "I worked on my website & created something I am really proud to share.",
            ["Design", "I started creating the website elements in Figma. Took a week to design the scroll-based story-driven homepage and portfolio showcase page."],
            ["Development", "I wrote the website in React.js. Everything is vanilla. I used no libraries besides Vercel and Next.js to optimize & deploy easier."],
            "The project took about two weeks total (besides maintainence). Interested in something similar for your business? Contact me & let's talk!"
        ],
        technologies: ["Next.js", "React.js", "Figma"],
        image: "./images/dev-projects/projects/website/splash.png",
        additionalInfo: {
            link: "./",
            images: [
                "./images/design-portfolio/projects/mySite/aboutMe.png",
                "./images/design-portfolio/projects/mySite/pages.png",
                "./images/design-portfolio/projects/mySite/niu.png",
            ]
        }
    },
    {
        company: "MULTICLIENT",
        title: "UREST",
        description: [
            "Built a platform to help refugees find food, shelter, housing, and support groups.",
            ["Background", "Originally an app built under my management in Resilience Inc (more details in leadership section), then handed off to me and a colleague to pursue ourselves until the Global NGO Executive Committee took in our project. Since then, the platform (an app and now website) has been totally revamped to target NGOs rather than individuals."],
            ["Impact", "The platform is used by 1,600 NGOs that GNEC serves, release to the United Nations WIP."],
            ["Notice", "The below demo video is intentionally outdated to protect aspects of the project. Please contact me (him@jasonxu.me) if you need further information"]
        ],
        technologies: ["React.js", "React Native", "Figma"],
        image:"./images/dev-projects/projects/UREST/splash.png",
        additionalInfo: {
            videos: [
                "https://www.youtube.com/embed/07aOLIbfsSM?si=m9e8wQLM3bVM2ovd",
            ]
        },
    },
    {
        company: "FUTUREX",
        title: "DINO",
        description: [
            "Helped build a Web3 startup based on event-hosting.",
            ["Role: Development & Design & Consulting", "I helped with redesigning Dino's old landing page to be more 'modern,' matching the site at [https://www.dino.live/home](https://www.dino.live/home). I recreated a landing page optimized for user experience and developed a splash page as a placeholder (@ [https://dino.live](https://dino.live)). I also designed various UI mockups for the event platform with Figma and designed the frontend API calls for our database. I ran routine design audits on our website and helped address issues which arose."],
            ["Impact", "We raised $300k USD in funding from MiraclePlus (former YCombinator China) & launched in September 2023. Our platform attracted Hedera Hashgarph, OKX, and we have hosted a side event at the Stanford Blockchain Conference (more details in recognition section)."]
        ],
        technologies: ["React.js", "Figma"],
        image: "./images/design-portfolio/projects/dino/splash.png",
        additionalInfo: {
            link: "https://dino.live",
            images: [
                "./images/design-portfolio/projects/dino/0.png",
                "./images/design-portfolio/projects/dino/1.png",
                "./images/design-portfolio/projects/dino/2.png",
                "./images/design-portfolio/projects/dino/3.png",
            ]
        }
    },
    {
        company: "EFAC",
        title: "Journey",
        description: [
            "Created a light-hearted game for k-12 kids to learn healthy coping mechanisms and responses to global warming",
            ["Role: Design & Development", "I designed the UI/UX in Figma and implemented the game in React Native through writing a custom scrollX engine. To create a sensitive yet engaging storyline, I worked alongside a Psychology researcher to write & implement the game's storyline."],
            ["Impact", "The game made it to the second stage of the 2022 Learning Engineering Tools Competition for $100k USD and was exhibited internationally in Geneva at the United Nation's Education Can't Wait High Level Financing Confernece (more details in recognition section)"],
            "Note: Project currently on haitus."
        ], 
        technologies: ["React.js", "React Native", "Figma"],
        image: "./images/design-portfolio/projects/journey/splash.png",
        additionalInfo: {
            images: [
                "./images/design-portfolio/projects/journey/3.png",
                "./images/design-portfolio/projects/journey/4.png",
                "./images/design-portfolio/projects/journey/1.png",
                // "./images/design-portfolio/projects/journey/0.png",
                "./images/design-portfolio/projects/journey/5.png",
                "./images/design-portfolio/projects/journey/6.png",
                "./images/design-portfolio/projects/journey/7.png",
                "./images/design-portfolio/projects/journey/2.png",
                "./images/design-portfolio/projects/journey/8.png",
            ],
            videos: [
                "https://www.youtube.com/embed/LXthMbQGSg8?si=nw5b4mxGjEgI0yYD"
            ]
        }
    },
    // {
    //     company: "MEGA",
    //     title: "KINECT",
    //     description: [
    //         "MEGA Kinect is a platform that aims to help students connect with internship opportunities.",
    //         ["Role: Design & Management", "I currently manage a team of development and design interns to create the Kinect Project. The following is a landing page mockup I created to establish the website's design themes for my team to follow. (Note: cover image from 3DIcons)"]
    // ],
    //     technologies: ["Management", "Figma"],
    //     image: "./images/design-portfolio/projects/kinect/splash.png",
    //     additionalInfo: {
    //         // link: "https://dino.live",
    //         images: [
    //             "./images/design-portfolio/projects/kinect/1.png",
    //             "./images/design-portfolio/projects/kinect/2.png",
    //             "./images/design-portfolio/projects/kinect/3.png",
    //         ]
    //     }
    // },
    {
        company: "MEGA",
        title: "MEGA League",
        description: [
            "MEGA Education League is my 501c3 non-profit organization aimed at providing STEAM opportunities to high-school and university students globally. ",
            ["Role: Co-founder & Tech Lead", "I co-founded MEGA Education League with a few friends in November of 2021. Since then, I've taken the role of our organization's tech lead, managing the Kinect Project, Web, and Hackathon."],
            ["MEGA Kinect", "MEGA Kinect is a platform that aims to help students connect with internship opportunities."],
            ["MEGA Hackathon", "The MEGA Hackathon is an annual hackathon hosted to help students learn skills through workshops while rewarding talent with prizes."],
            ["MEGA X Columbia University: AI Digital Storytelling Class", "We partnered with Columbia University's graduate students and professors to create a selective course on AI Digital Storytelling."],
            ["Impact", "MEGA hosted 3 hackathons (2 USA, 1 China) and raised over $50k USD in cash and much more in prizes. We were featured on various news outlets. More details on our website (click view button)"],
        ],
        technologies: ["Management", "Dev & Dzn"],
        image: "./images/design-portfolio/projects/mega2023/splash.png",
        additionalInfo: {
            link: "https://megahack.tech",
            images: [
                "./images/school-activities/projects/mega/1.jpg",
                "./images/school-activities/projects/mega/2.png",
                "./images/school-activities/projects/mega/3.jpg",
                "./images/school-activities/projects/mega/4.jpg",
                "./images/school-activities/projects/mega/5.jpg",
                "./images/design-portfolio/projects/mega2023/1.png",
                "./images/design-portfolio/projects/mega2023/2.png",
                "./images/design-portfolio/projects/mega2023/3.png",
                "./images/design-portfolio/projects/kinect/1.png",
                "./images/design-portfolio/projects/kinect/2.png",
                "./images/design-portfolio/projects/kinect/3.png",
            ]
        }
    },
    // {
    //     company: "Xatalyst LABS",
    //     title: "Simply",
    //     description: "Designed a simplistic & professional UI for my startup, Xatalyst Labs, to create a workout software backed by Artificial Intelligence. Click 'view' to see the website. (Note: Mobile WIP)",
    //     technologies: ["Figma"],
    //     image: "./images/design-portfolio/projects/simply/splash.png",
    //     additionalInfo: {
    //         link: "https://xatalyst.org/",
    //         images: [
    //             "./images/design-portfolio/projects/simply/0.png",
    //             "./images/design-portfolio/projects/simply/1.png",
    //             "./images/design-portfolio/projects/simply/2.png",
    //         ]
    //     }
    // },
    {
        company: "Holes",
        title: "HOLES APP",
        description: [
            "Developed an AI-powered vocabulary generation software.",
            ["Role: Founder & Developer", "I created the web app in JavaScript using GPT-3.5 and React in order to help me and a few friends study for English class vocabulary tests."],
            ["Impact", "Presented to staff & faculty at Rutgers Prep. Then presented at [ISTELive2023](/recognition?company=iste&name=iste%202023) for 20k teachers worldwide in a case study of passion-driven extracurriculars. (more details in recognition section)"], 
            "Currently turning this project into a startup. Working on a V2 with revamped UI (see below image)"
        ],
        technologies: ["AI", "GPT", "React"],
        image: "./images/school-activities/projects/holes/splash.png",
        additionalInfo: {
            // link: "",
            images: [
                "./images/school-activities/projects/holes/5.png",
                "./images/school-activities/projects/holes/6.png",
                "./images/school-activities/projects/holes/3.png",
                "./images/school-activities/projects/holes/1.png",
                "./images/school-activities/projects/holes/2.png",
                "./images/school-activities/projects/holes/4.png",
            ],
            videos: [
                "https://www.youtube.com/embed/AfIwfYx0ovw?si=zd0cj1ZECjkquESK"
            ]
        }
    },
    {
        company: "PERSONAL",
        title: "MYRPS APP",
        description: [
            "An automation service created to lessen COVID burdens." ,
            ["Background", "During COVID, our school mandated a health form which must be completed before students arrived to campus and created a complicated schedule during COVID years. Students had trouble keeping track of both. "],
            ["My Role: Founder & Developer", "I wrote an automatic email bot to remind each student of their daily schedule, lunch, and a one-click way to fill out their health screening form. This prevented a repetitive filling of common information (name, email, address) every morning and saved each student 5 minutes every day for a whole schoolyear. Additionally, my ambitions did not stop here. In the process of creating a mobile application, I found several security weaknesses (including passwords in plain text on login) in our school's LMS API. As a result, I wrote a 14-page debrief document and worked closely with the tech department to resolve the issues."],
            ["Impact", "My findings were part of the reason for our school's migration to Azure login from plaintext usernames & passwords. My service had more than 50 student users during the school year."],
        ],
        technologies: ["Python", "Firebase", "Technology", "Cybersecurity"],
        image: "./images/school-activities/projects/myrps/splash.png",
        additionalInfo: {
            // link: "",
            images: [
                "./images/school-activities/projects/myrps/1.png",
                "./images/school-activities/projects/myrps/2.png",
            ]
        }
    },
    {
        company: "Cowland Studios",
        title: "Game Dev",
        description: [
            "I wrote several games using Unreal Engine and managed a Youtube channel with my cousin. " ,
            ["Background", "I like creating games in my free time almost as much as playing them :). I first created games in Python and Scratch before my pivot to Unreal. Below are the games I  wrote with my cousin in order of release (earliest first)."],
            ["Parkour Game", "A parkour game made as a learning project to Unreal Engine."],
            "[Very 'Impressive' Parkour Game](https://cowlandgamestudios.itch.io/parkour-bad-game)",
            ["Subway Chaos", "A game about train redirection before they inevitably crash. Really enjoyed making this one since I love trains."],
            "[Subway Chaos](https://cowlandgamestudios.itch.io/subway-chaos)",
            ["Lone City", "A resource management game about an island city. Balance GDP and CO2 Emissions!"],
            "[Lone City](https://cowlandgamestudios.itch.io/lone-city)",
            ["Free Them", "A single & multi-player game on escaping a prison. Was our first time coding replication!"],
            "[Free Them](https://cowlandgamestudios.itch.io/freethem)",
            ["Running on Seconds", "After a year of seasoned development experience, we decided to revamp our first parkour game! "],
            "[Running on Seconds](https://cowlandgamestudios.itch.io/running-on-seconds)",
            ["Impact", "Our YouTube channel on [game development](https://www.youtube.com/c/cowland-game-studios) has over 70k views and more than 400 subscribers. Our games have been downloaded and played by more than 600 people on [Itch.io](https://cowlandgamestudios.itch.io/)."],
            "Before my journey in game development, I co-ran a youtube channel with my cousin on [playing games](https://youtube.com/c/cowland). It has gained over 110k views."
        ],
        technologies: ["UE4 & 5", "C++", "Blueprints"],
        image: "./images/dev-projects/projects/cowlandgamestudios/splash.png",
        additionalInfo: {
            // link: "",
            // images: [
            //     "./images/dev-projects/projects/cowlandgamestudios/1.png",
            //     "./images/dev-projects/projects/cowlandgamestudios/2.png",
            // ],
            videos: [
                // "https://www.youtube.com/embed/Cc13hi_Hvos?si=P8fJBh2CNb_Qq3zK",
                "https://www.youtube.com/embed/vu5oBX0mfq4?si=JDQXqMC1o3gy946C",
                "https://www.youtube.com/embed/khQYLthbXeE?si=JjziQsGRKAklltBs",
                "https://www.youtube.com/embed/W8vHgBGoqmI?si=YNJ6S3YP1l7ioUqR",
                "https://www.youtube.com/embed/tGlOPy-qdxM?si=MbPNcI69wvqcNudR",
                "https://www.youtube.com/embed/YyRKB4WNHzk?si=tAW_MrphJ3RKGFQu"
            ]
        }
    },
    {
        company: "OINTERFACE",
        title: "IMMERSE IN THE VERSE",
        description: [
            "Helped design a scrolling website for an O'Interface, who was inspired by my scrolling life-story website. O'Interface works with hundreds of high and middle-schools in China to pioneer VR learning. ", 
            ["Role: Design", "I designed a landing page for the game “Immerse In The Verse” by O'Interface themed on space exploration while allowing middle and high-school students to learn VR technologies. The website is currently under development."],
            "I'm glad to see my website has inspired change :)"
        ],
        technologies: ["Figma", "Midjourney"],
        image: "./images/design-portfolio/projects/verse/splash.png",
        additionalInfo: {
            images: [
                "./images/design-portfolio/projects/verse/1.png",
                "./images/design-portfolio/projects/verse/2.png",
                "./images/design-portfolio/projects/verse/3.png",
            ]
        }
    },
    // {
    //     company: "Holes",
    //     title: "Holes V2",
    //     description: "Revamping the user interface for my AI-powered vocabulary learning software, Holes. (more details in school activities section)",
    //     technologies: ["Figma"],
    //     image: "./images/design-portfolio/projects/holes/splash.png",
    //     additionalInfo: {
    //         images: [
    //             "./images/school-activities/projects/holes/5.png",
    //             "./images/school-activities/projects/holes/6.png",
    //         ]
    //     }
    // },

    // {
    //     company: "PERSONAL",
    //     title: "AQUARINGS",
    //     description: "Realizing myself as a easily-dehydrated individual, I made it my passion to revolutionize hydration and make drinking water more 'fun', I designed a smart water bottle with customizability. I designed the UI/UX for the app and the physical water bottle.",
    //     technologies: ["Figma", "Blender 3D"],
    //     image: "./images/design-portfolio/projects/aquarings/splash.png",
    //     additionalInfo: {
    //         // link: "https://megahack.tech",
    //         images: [
    //             "./images/design-portfolio/projects/aquarings/1.png",
    //             "./images/design-portfolio/projects/aquarings/2.png",
    //             "./images/design-portfolio/projects/aquarings/3.png",
    //         ]
    //     }
    // },

    // {
    //     company: "Coming soon",
    //     title: "WIP",
    //     dashed: true,
    //     description: ["This section is still WIP. There's a lot to add here & a lot to write :)"],
    //     image: "./images/dev-projects/projects/caution.png",
    // },
    // {
    //     company: "PERSONAL",
    //     title: "Collage",
    //     description: ["A collection of random designs I made. (Note: cover image from 3DIcons)"],
    //     technologies: ["Figma"],
    //     image: "./images/design-portfolio/projects/collage/splash.png",
    //     additionalInfo: {
    //         images: [
    //             "./images/design-portfolio/projects/collage/0.png",
    //             "./images/design-portfolio/projects/collage/1.png",
    //             "./images/design-portfolio/projects/collage/2.png",
    //             // "./images/design-portfolio/projects/collage/3.png",
    //         ]
    //     }
    // },
];

export default projectsList;
