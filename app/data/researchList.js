import schoolActivitiesList from "./schoolActivitiesList";

const researchList = [
    // {
    //     company: "WAKSMAN",
    //     title: "BIOLOGY RESEARCH",
    //     description: "I worked in a group of 4 to research DNA in Landoltia punctata over the summer as a Waksman Summer Scholar. Poster attached below. I was also the teaching assistant (more info see School Activities section) at my school.",
    //     technologies: ["PCR", "Pipetting", "Bioinformatics", "BLAST"],
    //     image: "./images/research/projects/waksman/splash.png",
    //     additionalInfo: {
    //         link: "https://wssp.rutgers.edu/wssp22-published-dna-sequences/",
    //         images: [
    //             "./images/research/projects/waksman/1.png",
    //             "./images/research/projects/waksman/2.png",
    //             "./images/research/projects/waksman/3.png",
    //             "./images/research/projects/waksman/4.png",
    //             "./images/research/projects/waksman/5.png",
    //             "./images/research/projects/waksman/6.png",
    //         ]
    //     }
    // },
    schoolActivitiesList.find((item) => item.company === "RESEARCH CLASS"),
    {
        company: "WAKSMAN",
        title: "DSAPR SOFTWARE",
        description: [
            "Worked on bioinformatics analysis software to check student-generated responses for Waksman school year. Automated the process of checking student responses, and provided a user-friendly interface for teachers to use. Expanded to a few other schools in the program. This project consolidated my love for bioinformatics which I hope to explore."
        ],
        technologies: ["React", "APIs", "Bioinformatics"],
        image: "./images/research/projects/dsapr/splash.png",
        additionalInfo: {
            link: "https://mootbing.github.io/DSAPR/",
            images: [
                "./images/research/projects/dsapr/1.png",
                "./images/research/projects/dsapr/2.png",
            ]
        }
    },
    {
        company: "(:",
        title: "Coming Soon",
        dashed: true,
        description: ["This is a new section in my page, and a new chapter in my life. I'm interested in academic research, and am looking forwards to pursuiting a few opportunities awaiting when I'm more free. (Note: cover image from 3DIcons)"],
        technologies: ["Research"],
        image: "./images/research/projects/lfw/splash.png",
        additionalInfo: {
            // link: "./",
            images: [
            ]
        }
    }
];

export default researchList;