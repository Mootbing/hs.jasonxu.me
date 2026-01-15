import projectsList from "./projectsList";
import schoolActivitiesList from "./schoolActivitiesList";

const leadershipList = [
    {
        company: "UNDGC & GNEC",
        title: "GNEC Hackathon",
        description: [
            "Founded & Managed a 600+ participant, multi-continental STEAM event (hackathon) in its first year",
            ["Role: Founder & Global Manager", "I recruited and led a global organization team of 40 high-school & college students curating a hackathon for the United Nations Department of Global Communications through the Global NGO Executive Committee. Working as the Global Manager overseeing 5 chapter leads and 4 project mangers worldwide, I established a chain of command and syncronized meetings across 6 continents. "],
            ["Impact", "Our finance team raised over $160k USD worth of prizes through NGOs and sponsors. The marketing team partnered with Devpost to obtain the 'Featured' tag for our hackathon and post flyers (in person and virtually) in locations from all 6 continents, and reached out to 1.6k NGOs in the UN Department of Global Communications who participated, or supplemented judges, sponsorships, and internship prizes. Our combined efforts allowed participant numbers to grow exponentially towards the end of the event and recieved participants from 53 countries."]
        ],
        technologies: ["Cross-continental collaboration"],
        image: "./images/leadership/projects/gnec/splash.png",
        additionalInfo: {
            link: "https://gnec-hackathon-2023.devpost.com/",
            images: [
                "./images/leadership/projects/gnec/1.png",
                "./images/leadership/projects/gnec/2.png",
                // "./images/leadership/projects/gnec/3.png",
                // "./images/leadership/projects/gnec/4.png",
                "./images/leadership/projects/gnec/5.png",
            ],
            videos: [
                "https://www.youtube.com/embed/LXB61MppXu4?si=NU0Cd_yoEVH8tCud"
            ]
        }
    },
    projectsList.find((item) => item.company === "MEGA"),
    {
        company: "Resilience Inc",
        title: "Various Projects",
        description: [
            "Managed high school, undergrad, and graduate students to help create projects at         Resilience Inc.",
            ["Role: Software Developer Turned Project Manager", ""],
            "First started at Resilience as an intern to develop the UREST application, which assisted refugees with finding Food, Shelter, and Healthcare.",
            "Was promoted to Product Manager and put in charge of the UREST project.",
            "Founded and managed the Time Manager project, designed to help students reduced screen time and engage in social-emotional learning.",
            "Led a team of 10 University students to develop UREST, and 12 high-school students to develop Time Manager. The original plan was for Time Manager to hone in skills of talented high-school students in a low-stake internship before selecting the best to continue in the UREST applicaton. ",
            "Split work between sub-teams I created for design, app development, budget, and marketing in both projects.",
            "Took weekly meetings with each sub-team, and ensured action items were completed.",
            "Time Manager was cancelled due to lack of company resources, and UREST was handed off to me and a colleague to pursuit as a passion project, where we acquired the interest of the Global NGO Executive Committee and the United Nations."
        ],
        technologies: ["Project Management"],
        image: "./images/leadership/projects/resilience/splash.png",
        additionalInfo: {
            link: "https://mylearningtools.org/",
        }
    },
    schoolActivitiesList.find((item) => item.company === "RESEARCH CLASS"),
    schoolActivitiesList.find((item) => item.company === "First Tech Challenge"),
    schoolActivitiesList.find((item) => item.company === "RPS Middle School"),
    schoolActivitiesList.find((item) => item.company === "School Club"),
];

export default leadershipList;