import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      created by{" "}
      <a
        href="https://github.com/Jorge-Guedes"
        target="_blank"
        rel="noreferrer"
      >
        Jorge Guedes
      </a>{" "}
      - devChallenges.io
    </footer>
  );
};

export default Footer;
