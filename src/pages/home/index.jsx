import Header from "../../components/Header";
import Footer2 from "../../components/Footer2";
import styles from "./Home.module.css";
import { Link } from "react-router-dom"; 

function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>Bem-vindo ao Nosso Blog de Receitas!</h1>
        <p>
          Seja bem-vindo ao nosso blog de receitas, um lugar onde você pode
          explorar e se aventurar na culinária, descobrindo novos sabores e
          receitas incríveis. Aqui, valorizamos não apenas a qualidade dos
          pratos, mas também a experiência gastronômica como um todo.
        </p>

        <section>
          <h2>Explore Nossas Categorias</h2>
          <div className={styles.category}>
            <h3>Receitas Populares</h3>
            <ul>
              <li>Lasanha de Frango</li>
              <li>Torta de Limão com Merengue</li>
              <li>Risoto de Cogumelos</li>
            </ul>
          </div>

          <div className={styles.category}>
            <h3>Culinária Internacional</h3>
            <ul>
              <li>Pad Thai Tailandês</li>
              <li>Paella Espanhola</li>
              <li>Tacos Mexicanos</li>
            </ul>
          </div>

          <div className={styles.category}>
            <h3>Receitas Saudáveis</h3>
            <ul>
              <li>Salada de Quinoa com Abacate</li>
              <li>Salmão Assado com Legumes</li>
              <li>Smoothie de Frutas Tropicais</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Destaques da Semana</h2>
          <div className={styles.highlight}>
            <h3>Receita Destaque: Risoto de Funghi</h3>
            <p>
              Aprenda a fazer um risoto cremoso e perfumado, preparado com
              cogumelos funghi e finalizado com queijo parmesão. Confira a
              receita completa <Link to="/risoto">aqui</Link>.
            </p>
          </div>

          <div className={styles.highlight}>
            <h3>Artigo: Dicas para Preparar o Melhor Churrasco</h3>
            <p>
              Saiba como preparar um churrasco perfeito com nossas dicas e
              truques para escolher os cortes de carne, acender o fogo e
              garantir o ponto ideal de cada peça. Leia o artigo completo <Link to="/churrasco">Aqui</Link>
            </p>
          </div>
        </section>

        <section>
          <h2>Sobre Nós</h2>
          <p>
            Somos uma equipe de entusiastas da culinária apaixonados por
            compartilhar nossas experiências e conhecimentos gastronômicos.
            Nosso objetivo é inspirar você a se aventurar na cozinha,
            experimentar novos sabores e criar momentos memoráveis ao redor da
            mesa.
          </p>
        </section>
      </div>
      <Footer2 />
    </>
  );
}

export default Home;
