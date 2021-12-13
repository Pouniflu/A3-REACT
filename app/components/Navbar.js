import React, { useState, useEffect } from "react"
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    const [user, setUser] = useState(null);
    return (
        <div className={styles.navContainer}>
            <h3>Corgis</h3>
            <p>Menu</p>
            <div>
                {   user ? (
                        <button>
                            Lougout
                        </button>
                    ) : (
                        <button>
                            Login
                        </button>
                    )
                }
            </div>
        </div>
    )
}