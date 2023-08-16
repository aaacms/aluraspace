import styles from './paginainicial.module.scss'

import Cabecalho from "componentes/cabecalho";
import Menu from "componentes/menu";
import Banner from 'componentes/banner';
import Rodape from "componentes/rodape";
import Galeria from "componentes/galeria";
import Populares from "componentes/populares";

export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    )
}