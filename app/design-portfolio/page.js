import ProjectExpo from "@/app/components/projectExpoPage/projectExpo";
import devProjectsList from "@/app/data/devProjectsList";
import dznPortfolioList from "@/app/data/dznPortfolioList";

export const metadata = {
  title: "Jason Xu | Nostalgia Avenue | DESIGN PORTFOLIO",
};

export default function DevProjects({}) {
  return <ProjectExpo tag={"MY WORK"} title={"DESIGN PORTFOLIO"} description={"I help my clients create memorable experiences through cutting-edge design."} gemstone={"./images/design-portfolio/header/Starglita.svg"} projectList={dznPortfolioList} />
}
