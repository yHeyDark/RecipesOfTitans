import React from "react";
import { Link } from "react-router-dom"; // Importe o componente Link
import styles from "./Risoto.module.css";

function Risoto() {
  return (
    <div className={styles.recipe}>
      <h2>Risoto de Funghi</h2>
      <p>
        Aprenda a fazer um risoto cremoso e perfumado, preparado com cogumelos funghi e finalizado com queijo parmesão. Confira a receita completa:
      </p>
      <ol>
        <li>Re-hidrate os cogumelos funghi secos: Coloque os cogumelos em uma tigela grande e cubra com água morna. Deixe de molho por cerca de 20-30 minutos, ou até que estejam macios. Escorra e reserve.</li>
        <li>Prepare o caldo de legumes: Em uma panela, aqueça o caldo de legumes em fogo médio. Mantenha-o aquecido durante todo o processo de cozimento do risoto.</li>
        <li>Refogue a cebola e o alho: Em outra panela grande, aqueça um pouco de azeite de oliva em fogo médio. Adicione a cebola picada e refogue até ficar macia e translúcida, cerca de 5 minutos. Adicione o alho picado e refogue por mais 1-2 minutos, até ficar perfumado.</li>
        <li>Adicione o arroz: Acrescente o arroz arbóreo à panela com a cebola e o alho, mexendo bem para revestir os grãos no azeite. Cozinhe por cerca de 1 minuto, até que os grãos fiquem levemente translúcidos.</li>
        <li>Deglace com vinho branco: Despeje o vinho branco na panela com o arroz e mexa até que seja absorvido completamente.</li>
        <li>Cozinhe o risoto: Comece a adicionar o caldo de legumes, uma concha de cada vez, mexendo sempre. Permita que o líquido seja absorvido antes de adicionar mais caldo. Continue esse processo até que o arroz esteja macio e cremoso, mas ainda al dente, o que deve levar cerca de 18-20 minutos.</li>
        <li>Adicione os cogumelos funghi: Quando o risoto estiver quase pronto, adicione os cogumelos funghi re-hidratados e escorridos. Continue cozinhando por mais alguns minutos, mexendo, até que os cogumelos estejam aquecidos.</li>
        <li>Finalize com queijo parmesão e manteiga: Retire a panela do fogo e adicione o queijo parmesão ralado e a manteiga. Mexa bem até que o queijo e a manteiga estejam totalmente incorporados e o risoto fique cremoso. Tempere com sal e pimenta a gosto.</li>
        <li>Sirva: Transfira o risoto de funghi para pratos individuais ou uma travessa grande. Polvilhe com salsinha fresca picada, se desejar, e sirva imediatamente. Aproveite!</li>
      </ol>
      <Link to="/" className={styles["back-button"]}>Voltar</Link> {/* Utilize o componente Link para criar o link de retorno */}
    </div>
  )
}

export default Risoto;
