import React from 'react';
import styles from './ExperienceCard.module.css';
import {useTheme} from '../../common/ThemeContext';

function ExperienceCard({ src, h3, p }) {
 const {theme} = useTheme();
  return (
    <div className={styles.card}>
      <img src={src} alt={h3} className={styles.image} />
      <h3>{h3}</h3>
      <div className={styles.paragraphContainer}>
        <p>{p}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;