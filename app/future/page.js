import ProjectExpo from "@/app/components/projectExpoPage/projectExpo";
import futureList from "@/app/data/futureList";

export const metadata = {
  title: "Jason Xu | Nostalgia Avenue | FUTURE",
};

export default function Future({}) {
  return <ProjectExpo tag={"MY GOALS"} title={"FUTURE"} description={"Here are my ambitious goals and aspirations for the future."} gemstone={"./images/future/header/Future.svg"} projectList={futureList} />
}
