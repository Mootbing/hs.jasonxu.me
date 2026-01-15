import projectsList from "./projectsList";

const schoolActivitiesList = [
    {
        company: "RESEARCH CLASS",
        title: "Teacher's Assistant",
        description: [
            "Aided 18 students of 2 classes to conduct Molecular Biology research and publish to NCBI (National Center for Biotechnology Information). ",
            ["Role: Teaching Assistant & Summer Scholar", "Selected from grade (110 students) for Waksman Student Scholars Program 2022-2023 and attended the research institute in the summer. My role in the classroom the following school year included making & diluting solutions, making agarose gel, calibrating pipettes, assisting with bioinformatics, most notably BLAST searches, and fixing miscallaneous lab equipment."],
            ["Impact", "NCBI Nucleotide IDs published: [15JX2.22](https://www.ncbi.nlm.nih.gov/nuccore/2288720594),  [15JX4.22](https://www.ncbi.nlm.nih.gov/nuccore/2288720595),  [15JX5.22](https://www.ncbi.nlm.nih.gov/nuccore/2288720596),  [15AC2.22](https://www.ncbi.nlm.nih.gov/nuccore/2504467190), [15AK3.22](https://www.ncbi.nlm.nih.gov/nuccore/2504467172), [15DS1.22](https://www.ncbi.nlm.nih.gov/nuccore/2504467184), [15KK3.22](https://www.ncbi.nlm.nih.gov/nuccore/2504467171), [15PS1.22](https://www.ncbi.nlm.nih.gov/nuccore/2504467170), [15SB3.22](https://www.ncbi.nlm.nih.gov/nuccore/2504467178), [15SD2.22](https://www.ncbi.nlm.nih.gov/nuccore/2504467188), [15SD3.22](https://www.ncbi.nlm.nih.gov/nuccore/2504467187), [15YH2.22](https://www.ncbi.nlm.nih.gov/nuccore/2504467173), [15YH3.22](https://www.ncbi.nlm.nih.gov/nuccore/2504467174)."],
            "(Note: pencil cover image from 3DIcons)"
        ],
        technologies: ["Leadership", "Comp & Molec Bio"],
        image: "./images/school-activities/projects/molbio/splash.png",
        additionalInfo: {
            link: "https://wssp.rutgers.edu/wssp22-published-dna-sequences",
            images: [
                "./images/school-activities/projects/molbio/0.jpg",
                "./images/school-activities/projects/molbio/1.png",
                "./images/school-activities/projects/molbio/2.png",
                "./images/school-activities/projects/molbio/3.png",
                "./images/school-activities/projects/molbio/4.png",
                "./images/school-activities/projects/molbio/5.png",
            ]
        }
    },
    {
        company: "First Tech Challenge",
        title: "Robotics Team",
        description: ["After noting a vaccuum in STEAM opportunites at my school, I promptly filled it by starting a robotics team with friends.",
        ["Role: Co-Founder & Lead Programmer", "We recruited a team of passionate individuals to join our team. I was the lead programmer, but helped do CAD modeling and building when needed."], ["Impact", "We raised $22k (11k/year budget) from our school's administration and community. I won deans-list semi-finalist, was captain at alliance selections, and our team won the Motivate Award which allowed us to advance to States in our first year. I also created two tools for the FTC community, [Cowlang](https://cowlang.argonautsftc.org/) and [OpenScout](https://openscout.argonautsftc.org/). Cowlang allowed us to teach outreach events where middle-schoolers could program the robot using block code. Openscout was a simplistic & open-source scouting software written to improve upon ftcscout.org with advanced algorithms and a table-styled format."]],
        technologies: ["Java", "CAD", "\"Bootlegging\""],
        image: "./images/school-activities/projects/ftc/splash.png",
        additionalInfo: {
            // link: "https://argonautsftc.org",
            images: [
                "./images/school-activities/projects/ftc/1.jpg",
                "./images/school-activities/projects/ftc/2.jpg",
                "./images/school-activities/projects/ftc/3.png",
                "./images/school-activities/projects/ftc/4.png",
                "./images/school-activities/projects/ftc/5.png",
                "./images/school-activities/projects/ftc/6.png",
                "./images/school-activities/projects/ftc/7.png",
            ]
        }
    },
    projectsList.find((item) => item.title === "HOLES APP"),
    {
        company: "RPS Middle School",
        title: "Robotics Class",
        description: [
            "Wanting to crush the vaccuum in STEAM for good, my friends and I took advantage of the fact our school was K-12 and created a middle-school robotics class. We taught a two-semester curriculum with over 20 twice-weekly classes based on Makeblock and with a bit of line code and traditional engineering. We hope that in stimulating interest in robotics early, there will be a steady inflow of new talent to our school's team. ",
            "Note: makeblock cover image not mine; found online."
        ],
        technologies: ["Teaching", "Planning"],
        image: "./images/school-activities/projects/msclass/splash.png",
        additionalInfo: {
            // link: "",
            images: [
                "./images/school-activities/projects/msclass/1.png",
                "./images/school-activities/projects/msclass/2.png",
                "./images/school-activities/projects/msclass/3.png",
            ]
        }
    },
    projectsList.find((item) => item.title === "MYRPS APP"),
    {
        company: "School Club",
        title: "Computing Club",
        description: ["Led the computing club that hosted workshops with guest lecturers teaching skillsets and tech stacks from Tensorflow to Python. Also worked on projects with Raspberry Pis and Python and pitched products to Imagine Cup and competed in the American Computer Science League. Following videos are from my team's Imagine Cup pitch and some of my workshops I hosted in freshamn year (my voice is so squeaky lol).  (Note: cover image from 3DIcons)"],
        technologies: ["Teaching", "Technology"],
        image: "./images/school-activities/projects/comp-club/splash.png",
        additionalInfo: {
            // link: "",
            images: [
                "./images/school-activities/projects/comp-club/1.png",
                "./images/school-activities/projects/comp-club/2.png",
            ],
            videos: [
                "https://www.youtube.com/embed/noP5JaGeIJE?si=PhhgmX_1SEGn5RzH",
                "https://www.youtube.com/embed/az2ehPlSsn4?si=JfkWIuRlBeYbpm_-",
                "https://www.youtube.com/embed/JAotFBkzT4Q?si=ZKYM--HVA4yb_KW0",
            ]
        }
    }
];

export default schoolActivitiesList;