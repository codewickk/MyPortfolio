import React from 'react';
import styles from './CertificateCard.module.css';

function CertificateCard({ src, link, h3, p }) {
  return (
    <a href={link} className={styles.card} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={h3} className={styles.image} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default CertificateCard;
