import ProjectExpo from "@/app/components/projectExpoPage/projectExpo";
import researchList from "@/app/data/researchList";

export const metadata = {
  title: "Jason Xu | Nostalgia Avenue | RESEARCH",
};

export default function Research({}) {
  return <ProjectExpo tag={"MY WORK"} title={"RESEARCH"} description={"I'm passionate about research and contributing to the scientific community."} gemstone={"./images/research/header/Research.svg"} projectList={researchList} />
}
