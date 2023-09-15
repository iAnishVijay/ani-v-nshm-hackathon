import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head';
import Link from 'next/link';
import EventCard from './components/EventCard'
import salsa from './images/salsa.jpeg'
import singing from './images/singing.jpg'
import standUp from './images/standup.jpg'

export default function Home() {
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
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </header>
    <main className={styles.main}>
      <h1 className={styles.eventsHeading}>Upcoming Events:</h1>
      <div className={styles.eventsContainer}>
      <EventCard image={salsa} title={"Dance"}/>
      <EventCard image={singing} title={"Singing"}/>
      <EventCard image={standUp} title={"Stand-Up Comedy"}/>
      </div>
    </main>
    </>
  )
}
