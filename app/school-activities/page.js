import ProjectExpo from "@/app/components/projectExpoPage/projectExpo";
import schoolActivitiesList from "@/app/data/schoolActivitiesList";

export const metadata = {
  title: "Jason Xu | Nostalgia Avenue | SCHOOL ACTIVITIES",
};

export default function SchoolActivities({}) {
  return <ProjectExpo tag={"MY WORK"} title={"SCHOOL ACTIVITIES"} description={"I'm involved in various school activities and clubs that help me grow as a person."} gemstone={"./images/school-activities/header/SchoolActivities.svg"} projectList={schoolActivitiesList} />
}
