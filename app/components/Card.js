import React, { useState, useEffect }from "react"
import Image from "next/image";
import styles from '../styles/Card.module.css'
import { useRouter } from 'next/router'

export default function Card(props) {
    const [selected, setSelected] = useState(null)
    const router = useRouter()

    return (
        <div className={styles.card}>
            <h2>{props.title}</h2>
            <Image
            width='100%'
            height='100%'
            src={props.image} alt={props.altImage}/>
            <p>{props.desc}</p>
            <p>{props.age}</p>
            <button onClick={() => { 
                router.push({pathname: '[productname]', query:{productname:props.title}})
                localStorage.setItem("selected_product", JSON.stringify(props))
            }}>En savoir plus !</button>
        </div>
    )
}