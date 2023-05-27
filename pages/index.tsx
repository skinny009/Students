import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className={styles.title}>
      <h1 className={styles.text}>HomePage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quibusdam totam corporis maiores voluptates. Quisquam consequatur corrupti nihil ipsum inventore, est laborum enim consequuntur eveniet quidem delectus velit omnis vel.</p>
      <Link href="/students" className={styles.btn}>
        Students
      </Link>
    </div>
      
    </>
    
  )
}
