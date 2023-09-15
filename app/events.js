import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head';
import Link from 'next/link';

export default function Events() {
  return (
    <>
    <Head>
    </Head>
    <header className={styles.header}>
        <Link href="/">
          <div className={styles.logoContainer}>
            
            <h3 className={styles.headerHeading}>AGC Conference</h3>
          </div>
        </Link>
        <ul className={styles.headerMenu}>
          <li><Link href="/"></Link></li>
          <li><Link href="/upload">Events</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </header>
    <main className={styles.main}>
      
      
    </main>
    </>
    
  )
}
