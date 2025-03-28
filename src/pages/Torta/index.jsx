import { Link } from 'react-router-dom';
import React from 'react';
import styles from "./Torta.module.css"


function Torta() {
  return (
    <div className={styles.torta}>
      <h1>Torta de Limão</h1>
      <p>Uma torta refrescante e deliciosa, perfeita para qualquer ocasião.</p>
      <h2>Ingredientes:</h2>
      <ul>
        <li>200g de bolacha maisena</li>
        <li>100g de manteiga derretida</li>
        <li>1 lata de leite condensado</li>
        <li>1 caixinha de creme de leite</li>
        <li>Suco de 4 limões</li>
        <li>Raspas de limão para decorar</li>
      </ul>
      <h2>Modo de Preparo:</h2>
      <ol>
        <li>Triture as bolachas maisena até formar uma farofa.</li>
        <li>Misture a farofa de bolacha com a manteiga derretida até obter uma massa homogênea.</li>
        <li>Forre o fundo de uma forma de fundo removível com a massa de bolacha, pressionando bem para formar a base da torta. Reserve na geladeira enquanto prepara o recheio.</li>
        <li>Em uma tigela, misture o leite condensado, o creme de leite e o suco dos limões até obter um creme homogêneo.</li>
        <li>Despeje o creme sobre a massa de bolacha na forma.</li>
        <li>Leve a torta à geladeira por pelo menos 4 horas, ou até que o recheio esteja firme.</li>
        <li>Antes de servir, decore com raspas de limão por cima.</li>
        <li>Corte em fatias e sirva gelado. Bom apetite!</li>
      </ol>
      <Link to="/receitas" className={styles["back-button"]}>Voltar</Link>
    </div>
  );
};

export default Torta;
