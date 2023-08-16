import React from 'react'
import insta from './instagram.svg'
import face from './facebook.svg'
import tt from './twitter.svg'
import styles from './rodape.module.scss'

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <ul className={styles.rodape__icones}>
                    <a href='https://facebook.com'>
                        <img src={face} alt='Logo do Facebook' />
                    </a>
                    <a href='https://twitter.com'>
                        <img src={tt} alt='Logo do Twitter' />
                    </a>
                    <a href='https://instagram.com'>
                        <img src={insta} alt='Logo do Instagram' />
                    </a>
            </ul>
            <p>Desenvolvido por Alura</p>
        </footer>
    )
}
