import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Receita.module.css";
import { Link } from "react-router-dom";

function Receitas() {
  return (
    <>
      <Header />
      <div className={styles.receitasContainer}>
        <h1>Receitas</h1>
        <ul className={styles.receitasList}>
          <li className={styles.receitaItem}>
            <h2><Link to="/lasanha">Lasanha de Frango</Link></h2>
            <p>Uma deliciosa lasanha recheada com frango desfiado e molho de tomate, coberta com queijo derretido.</p>
          </li>
          <li className={styles.receitaItem}>
            <h2><Link to="/torta">Torta de limão</Link></h2>
            <p>Uma torta refrescante com base de biscoito e um recheio de creme de limão, finalizada com merengue tostado.</p>
          </li>
          <li className={styles.receitaItem}>
            <h2><Link to="/cogumelo">Risoto de Cogumelos</Link></h2>
            <p>Um risoto cremoso feito com arroz arbóreo, caldo de legumes e uma variedade de cogumelos.</p>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Receitas;
