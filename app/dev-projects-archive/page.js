import ProjectExpo from "@/app/components/projectExpoPage/projectExpo";
import devProjectsList from "@/app/data/devProjectsList";

export const metadata = {
  title: "Jason Xu | Nostalgia Avenue | DEV PROJECTS ARCHIVE",
};

export default function DevProjects({}) {
  return <ProjectExpo tag={"MY WORK"} title={"DEV PROJECTS"} description={"I help my clients bring visions into reality with the use of today's & tomorrow's technologies."} gemstone={"./images/dev-projects/header/Aespaetha.svg"} projectList={devProjectsList} />
}
