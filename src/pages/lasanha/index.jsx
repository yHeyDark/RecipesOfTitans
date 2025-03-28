import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Lasanha.module.css"

function Lasanha() {
  return (
    <div className={styles.lasanha}>
      <h1>Lasanha de Frango</h1>
      <p>Uma deliciosa lasanha de frango, perfeita para reunir a família em um jantar especial.</p>
      <h2>Ingredientes:</h2>
      <ul>
        <li>500g de massa para lasanha pré-cozida</li>
        <li>500g de peito de frango desfiado</li>
        <li>1 cebola picada</li>
        <li>2 dentes de alho picados</li>
        <li>1 lata de molho de tomate</li>
        <li>200g de queijo mussarela ralado</li>
        <li>200g de queijo parmesão ralado</li>
        <li>Sal e pimenta a gosto</li>
        <li>Azeite de oliva</li>
      </ul>
      <h2>Modo de Preparo:</h2>
      <ol>
        <li>Em uma panela, aqueça o azeite e refogue a cebola e o alho até dourarem.</li>
        <li>Adicione o frango desfiado e tempere com sal e pimenta a gosto. Refogue até o frango ficar cozido.</li>
        <li>Acrescente o molho de tomate e cozinhe por mais alguns minutos.</li>
        <li>Em um refratário, faça camadas alternadas de massa para lasanha, frango refogado e queijo mussarela. Repita o processo até terminarem os ingredientes.</li>
        <li>Finalize com uma camada de queijo parmesão ralado por cima.</li>
        <li>Leve ao forno preaquecido a 180°C por aproximadamente 30 minutos, ou até gratinar.</li>
        <li>Sirva quente e aproveite!</li>
      </ol>
      <Link to="/receitas" className={styles["back-button"]}>Voltar</Link>
    </div>
  )
}

export default Lasanha;
