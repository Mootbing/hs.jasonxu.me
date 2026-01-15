import ProjectExpo from "@/app/components/projectExpoPage/projectExpo";
import leadershipList from "@/app/data/leadershipList";
import { Metadata } from "next";

export const metadata = {
  title: "Jason Xu | Nostalgia Avenue | LEADERSHIP",
};

export default function Leadership({}) {
  return <ProjectExpo tag={"MY WORK"} title={"LEADERSHIP"} description={"I'm a teacher's assistant by day, project manager by night, and anything anytime in between."} gemstone={"./images/leadership/header/Leadership.svg"} projectList={leadershipList} />
}
