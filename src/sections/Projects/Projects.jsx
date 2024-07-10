import styles from './ProjectsStyles.module.css';
import Noteworthy from '../../assets/noteworthy.svg';
import Netflix from '../../assets/Netflix.svg';
import videochum from '../../assets/videochum.svg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      
        <ProjectCard
          src={Noteworthy}
          link="https://noteworthy-git-main-codewickks-projects.vercel.app/"
          h3="Noteworthy"
          p="Take clean notes"
        />
        <ProjectCard
          src={Netflix}
          link="https://netflix-clone-blush-five.vercel.app/"
          h3="Netflix-clone"
          p="Netflix landing page"
        />
        <ProjectCard
          src={videochum}
          link="https://video-chum.vercel.app/"
          h3="videochum"
          p="Connect through video calls"
        />
      </div>
    </section>
  );
}

export default Projects;
