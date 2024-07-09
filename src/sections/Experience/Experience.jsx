import React from 'react';
import styles from './ExperienceStyles.module.css';
import CompanyLogo from '../../assets/Summercoollogo.svg';
import ExperienceCard from './ExperienceCard';
import { useTheme } from '../../common/ThemeContext';
function Experience() {
  const{theme} = useTheme();
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.experienceContainer}>
        <ExperienceCard
          src={CompanyLogo}
          h3="Summercool Appliances Private Ltd"
          p="As a React Developer intern at Summer Cool Technology, I worked under the guidance of senior developers to transform the company's existing website. My role involved converting the pre-existing HTML, CSS, and JavaScript code into a modern React-based framework. This update not only improved the website's performance and user experience but also ensured a smoother workflow. I collaborated closely with my seniors, incorporating their feedback and suggestions, which significantly enhanced my front-end development skills and demonstrated my ability to adapt and improve legacy codebases."
        />
      </div>
    </section>
  );
}

export default Experience;
