import styles from "./ProjectsStyles.module.css";
import dokobus from "../../assets/dokobus.png";
import portfolio from "../../assets/portfolio.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={dokobus}
          link="https://github.com/ifebronr/Dokobus"
          h3="Dokobus"
          p="College Bus Tracker"
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/ifebronr/Dokobus"
          h3="Portfolio (This site)"
          p="My first React Project"
        />
      </div>
    </section>
  );
}

export default Projects;
