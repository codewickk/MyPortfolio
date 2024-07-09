import React from 'react';
import styles from './CertificatesStyles.module.css';
import Udemy from '../../assets/udemy.png';
import CertificateCard from './CertificateCard';

function Certificates() {
  return (
    <section id="certificates" className={styles.container}>
      <h1 className="sectionTitle">Certificates</h1>
      <div className={styles.certificatesContainer}>
        <CertificateCard
          src={Udemy}
          link="https://www.udemy.com/certificate/UC-7ccc4bb9-e02a-4535-901e-9b2c0216ddea/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
          h3="The complete web development bootcamp"
          p="View Certificate"
        />
        <CertificateCard
          src={Udemy}
          link="https://www.udemy.com/certificate/UC-dda445a9-0219-476b-a542-4c9d60f94e85/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
          h3="Mastering Data Structures & Algorithms using C and C++"
          p="View Certificate"
        />
        <CertificateCard
          src={Udemy}
          link="https://www.udemy.com/certificate/UC-d2dc29b1-f5aa-478f-b52b-9bab7f033a76/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com"
          h3="Learn C++ Programming - Beginner to Advance- Deep Dive in C++"
          p="View Certificate"
        />
      </div>
    </section>
  );
}

export default Certificates;
