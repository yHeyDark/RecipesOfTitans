import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2024 Blog Culinário - Todos os direitos reservados</p>
        <p>Desenvolvido por Derik</p>
      </div>
    </footer>
  );
}

export default Footer;
