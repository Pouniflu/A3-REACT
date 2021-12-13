import React, { useState, useEffect } from "react"
import styles from '../styles/Navbar.module.css'

export default function Navbar() {

    return (
        <div className={styles.navContainer}>
            <p>Corgi 1</p>
            <p>Corgi 2</p>
            <p>Corgi 3</p>
            
        </div>
    )
}