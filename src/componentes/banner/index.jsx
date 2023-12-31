import React from 'react'
import styles from './banner.module.scss'
import banner from './banner.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <h1>A galeria mais completa de fotos do espaço!</h1>
            <img src={banner} alt="Imagem da terra vista do espaço" />
        </div>
    )
}
