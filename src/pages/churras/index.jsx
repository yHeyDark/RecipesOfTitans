import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import styles from "./Churras.module.css";

function Churrasco() {
    return (
        <>
            <Header />
            <div className={styles.Churrasco}>
                <h1>Dicas para Preparar o Melhor Churrasco</h1>
                <article>
                    <h2>1. Escolha dos cortes de carne</h2>
                    <p>
                        Comece escolhendo cortes de carne de qualidade, como picanha, costela, linguiça, fraldinha, entre outros.
                    </p>

                    <h2>2. Temperos e marinadas</h2>
                    <p>
                        Utilize temperos e marinadas para realçar o sabor da carne. Alho, sal grosso, pimenta do reino e ervas são excelentes opções.
                    </p>

                    <h2>3. Controle da temperatura da churrasqueira</h2>
                    <p>
                        Mantenha o controle da temperatura da churrasqueira para garantir que a carne seja assada de forma uniforme e no ponto desejado.
                    </p>

                    <h2>4. Acompanhamentos</h2>
                    <p>
                        Não se esqueça dos acompanhamentos! Arroz, feijão tropeiro, farofa, vinagrete e pão de alho são clássicos que complementam o churrasco.
                    </p>

                    <h2>5. Cuidado com o tempo de preparo</h2>
                    <p>
                        Cada tipo de carne tem um tempo de preparo específico. Fique atento para não deixar a carne passar do ponto.
                    </p>

                    <h2>6. Atenção à limpeza da churrasqueira</h2>
                    <p>
                        Limpe a churrasqueira antes de começar e após o término do churrasco para evitar que resíduos comprometam o sabor da carne.
                    </p>

                    <h2>7. Aproveite o momento!</h2>
                    <p>
                        O churrasco é uma excelente oportunidade para reunir amigos e familiares. Aproveite o momento para se divertir e saborear a comida.
                    </p>
                    <p><Link to="/" className={styles["back-button"]}>Voltar</Link></p>
                </article>
            </div>
            <Footer />
        </>
    )
}

export default Churrasco;
