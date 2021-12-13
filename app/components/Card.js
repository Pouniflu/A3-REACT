import React from "react"
import Image from "next/image";
import styles from '../styles/Card.module.css'

export default function Card(props) {

    return (
        <div className={styles.card}>
            <h2>{props.title}</h2>
            <Image
            width='100%'
            height='100%'
            src={props.image} alt={props.altImage}/>
            <p>{props.desc}</p>
            <p>{props.age}</p>
            <button>En savoir plus !</button>
        </div>
    )
}