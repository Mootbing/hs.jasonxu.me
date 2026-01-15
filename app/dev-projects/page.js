import ProjectExpo from "@/app/components/projectExpoPage/projectExpo";
import projectsList from "@/app/data/projectsList";

export const metadata = {
  title: "Jason Xu | Nostalgia Avenue | DEV PROJECTS",
};

export default function Projects({}) {
  return <ProjectExpo tag={"MY WORK"} title={"DEV PROJECTS"} description={"I help my clients bring visions into reality with the use of today's & tomorrow's technologies."} gemstone={"./images/design-portfolio/header/Starglita.svg"} projectList={projectsList} />
}
