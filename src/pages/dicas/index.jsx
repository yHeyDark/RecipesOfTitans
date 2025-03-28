import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Dicas.module.css"; 

function Dicas() {
  return (
    <div className={styles.dics}> 
      <Header />
      <div className="dics">
        <h1>Dicas</h1>
        <p>
          Aqui estão algumas dicas úteis para aprimorar suas habilidades culinárias:
        </p>
        <ul>
          <li>Use facas afiadas para cortar os ingredientes com mais facilidade e segurança.</li>
          <li>Experimente ingredientes frescos e sazonais para obter os melhores sabores em suas receitas.</li>
          <li>Tempere seus pratos com equilíbrio, experimentando uma combinação de sal, pimenta, ervas e especiarias.</li>
          <li>Aprenda técnicas básicas de cozinha, como refogar, grelhar e assar, para expandir seu repertório culinário.</li>
          <li>Divirta-se na cozinha e não tenha medo de experimentar novas receitas e ingredientes!</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Dicas;
