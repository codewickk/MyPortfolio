import styles from './FooterStyles.module.css';

function Footer() {
  const d = new Date();
  const y = d.getFullYear();
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; {y} Manas Puri. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
