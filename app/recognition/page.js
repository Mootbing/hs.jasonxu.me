import ProjectExpo from "@/app/components/projectExpoPage/projectExpo";
import recognitionList from "@/app/data/recognitionList";

export const metadata = {
  title: "Jason Xu | Nostalgia Avenue | RECOGNITION",
};

export default function Recognition({}) {
  return <ProjectExpo tag={"MY WORK"} title={"RECOGNITION"} description={"My work has gained applause in international conferences and the attention of world leaders."} gemstone={"./images/recognition/header/Prize.svg"} projectList={recognitionList} />
}
