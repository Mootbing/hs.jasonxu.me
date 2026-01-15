import dznPortfolioList from "./dznPortfolioList";

const devProjectsList = [
    {
        company: "JASON XU",
        title: "MY WEBSITE",
        description: dznPortfolioList.find((item) => item.title === "MY WEBSITE").description,
        technologies: ["React", "Next.js", "CSS", "Figma"],
        image: "./images/dev-projects/projects/website/splash.png",
        dashed: true,
        additionalInfo: dznPortfolioList.find((item) => item.title === "MY WEBSITE").additionalInfo
    },
    {
        company: "GNEC",
        title: "UREST",
        description: "Built first a mobile app to help refugees find food, shelter, housing, and communities. Originally a project undertaken in Resilience Inc (more details in leadership section), then handed off to me and a colleague to pursue ourselves until the Global NGO Executive Committee took the project with us. Since then, I have developed the app and created an accompanying website as well. These are now used by the 1,600 NGOs GNEC serves and we are on track to launching into the United Nations. (Note: project is somewhat sensitive, below demos are not latest)",
        technologies: ["React.js", "React Native", "Figma"],
        image: "./images/dev-projects/projects/Caution.png",
        additionalInfo: {
            videos: [
                "https://www.youtube.com/embed/07aOLIbfsSM?si=m9e8wQLM3bVM2ovd",
            ]
        },
    },
    {
        company: "EFAC",
        title: "Journey",
        description: "Programmed a game for k-12 students to ",
        technologies: ["React.js", "React Native", "Figma"],
        image: "./images/dev-projects/projects/Caution.png",
        additionalInfo: {
            videos: [
                "https://www.youtube.com/embed/07aOLIbfsSM?si=m9e8wQLM3bVM2ovd",
            ],
            link: "https://yourest.org"
        },
    },
    // {
    //     company: "WIP",
    //     title: "WIP",
    //     description: "This section is still WIP. There's a lot to add here & I'm trying to fact-check everything before it goes live.",
    //     technologies: ["Patience"],
    //     image: "./images/dev-projects/projects/Caution.png",
    //     additionalInfo: {
    //     }
    // }
];

export default devProjectsList;