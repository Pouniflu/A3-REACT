import Head from 'next/head'
import { useState, useEffect } from 'react/cjs/react.development'
import Navbar from '../../components/Navbar'
// import Image from "next/image";
import styles from '../../styles/Card.module.css'

export default function ProductName() {
const [props, setSelectedProduct] = useState([])

  useEffect(() => {
    const props = JSON.parse(localStorage.getItem('selected_product'))
    setSelectedProduct(props)
  })
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <Navbar />
        <div>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <p>{props.age}</p>
        </div>
      </main>
    </div>
  )
}
