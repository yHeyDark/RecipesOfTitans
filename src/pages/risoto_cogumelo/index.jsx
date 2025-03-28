import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./risoto_cogu.module.css"

function RisotoDeCogumelos() {
  return (
    <div className={styles.container}>
      <h1>Risoto de Cogumelos</h1>
      <p>Um risoto cremoso feito com arroz arbóreo, caldo de legumes e uma variedade de cogumelos.</p>
      <h2>Ingredientes:</h2>
      <ul>
        <li>2 xícaras de arroz arbóreo</li>
        <li>1 cebola picada</li>
        <li>2 dentes de alho picados</li>
        <li>200g de cogumelos variados (shiitake, shimeji, champignon)</li>
        <li>1 litro de caldo de legumes</li>
        <li>1/2 xícara de vinho branco seco</li>
        <li>4 colheres de sopa de manteiga</li>
        <li>1/2 xícara de queijo parmesão ralado</li>
        <li>Sal e pimenta a gosto</li>
        <li>Salsinha picada para decorar</li>
      </ul>
      <h2>Modo de Preparo:</h2>
      <ol>
        <li>Em uma panela, aqueça o caldo de legumes e mantenha em fogo baixo.</li>
        <li>Em outra panela, derreta metade da manteiga e refogue a cebola e o alho até dourarem.</li>
        <li>Adicione os cogumelos picados e refogue por alguns minutos.</li>
        <li>Acrescente o arroz arbóreo à panela e misture bem, deixando o arroz fritar por alguns minutos.</li>
        <li>Adicione o vinho branco e mexa até que o líquido seja absorvido pelo arroz.</li>
        <li>Aos poucos, adicione conchas do caldo de legumes quente ao arroz, mexendo sempre e esperando que o líquido seja absorvido antes de adicionar mais.</li>
        <li>Continue adicionando o caldo de legumes até que o arroz esteja cozido, mas ainda al dente.</li>
        <li>Retire do fogo e adicione o restante da manteiga e o queijo parmesão ralado, mexendo bem para incorporar.</li>
        <li>Tempere com sal e pimenta a gosto.</li>
        <li>Sirva o risoto em pratos individuais, decorado com salsinha picada por cima.</li>
      </ol>
      <Link to="/receitas" className={styles["back-button"]}>Voltar</Link>
    </div>
  );
}

export default RisotoDeCogumelos;
