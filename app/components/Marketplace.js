import React from "react"
import styles from '../styles/Marketplace.module.css'
import Card from "./Card"

export default function Marketplace() {
    return (
        <div className={styles.marketcontainer}>
            <h3 style={{gridColumn:'3/3', gridColumnStart:'1', gridColumnEnd:'4', textTransform:'uppercase'}}>Marketplace</h3>
            <Card 
            title="Milou" 
            image="https://images.pexels.com/photos/994174/pexels-photo-994174.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            altImage="photo de Milou" 
            desc="Milou est un jeune Corgi plein d'énergie"
            age="7 mois" />

            <Card 
            title="Bonbon" 
            image="https://images.pexels.com/photos/5321441/pexels-photo-5321441.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            altImage="photo de Bonbon" 
            desc="Bonbon est un Carlin très attachant"
            age="2 ans" />

            <Card 
            title="Nestor" 
            image="https://images.pexels.com/photos/9291110/pexels-photo-9291110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            altImage="photo de Nestor" 
            desc="Nestor est un jeune Labrador au caractère bien trempé"
            age="1 an et demi" />
        </div>
    )
}