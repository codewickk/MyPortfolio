import React from 'react';
import styles from './Header.module.css';

function Header() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <div className={styles.name}>Manas Puri</div>
      <nav className={styles.nav}>
        <button onClick={() => scrollToSection('hero')}>Home</button>
        <button onClick={() => scrollToSection('experience')}>Experience</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('skills')}>Skills</button>
        <button onClick={() => scrollToSection('certificates')}>Certificates</button>
        <button onClick={() => scrollToSection('profile')}>Profile</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </nav>
    </header>
  );
}

export default Header;
