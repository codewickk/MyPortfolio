
import React from 'react';
import styles from './ProfileStyles.module.css';
import Leetcode from '../../assets/leetcode.png';
import Github from '../../assets/github.png';
import LinkedIn from '../../assets/linkedn.png';
import ProfileCard from './ProfileCard';

function Profile() {
  return (
    <section id="profile" className={styles.container}>
      <h1 className="sectionTitle">Profile</h1>
      <div className={styles.profileContainer}>
        <ProfileCard
          src={Leetcode}
          link="https://leetcode.com/u/codewickk/"
          h3="Leetcode"
          p="Visit my Leetcode profile"
        />
        <ProfileCard
          src={Github}
          link="https://github.com/codewickk"
          h3="Github"
          p="Visit my Github profile"
        />
        <ProfileCard
          src={LinkedIn}
          link="https://www.linkedin.com/in/manas-puri-6071a1241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          h3="LinkedIn"
          p="Visit my LinkedIn profile"
        />
      </div>
    </section>
  );
}

export default Profile;
