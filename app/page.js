import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head';
import Link from 'next/link';
import EventCard from './components/EventCard'
import salsa from './images/salsa.jpeg'
import gaming from './images/gaming.webp'
import standUp from './images/standup.jpg'
import agcLogo from './images/agc-logo.png'


export default function Home() {
  return (
    <>
    <Head>
    </Head>
    <header className={styles.header}>
        <Link href="/">
          <div className={styles.logoContainer}>
            <Image className={styles.headerLogo} src={agcLogo}>
            </Image>
            <h3 className={styles.headerHeading}>Analytics Global Conference</h3>
          </div>
        </Link>
      </header>
    <main className={styles.main}>
      <h1 className={styles.eventsHeading}>Upcoming Events:</h1>
      <div className={styles.eventsContainer}>
      <EventCard image={salsa} title={"Dance"}/>
      <EventCard image={gaming} title={"Gaming"}/>
      <EventCard image={standUp} title={"Stand-Up Comedy"}/>
      </div>
      <div className={styles.line}></div>
      <form className={styles.registerFormContainer}>
        <p className={styles.registerText}>Register NOW!</p>
        <input type="text" className={styles.registerInputFields} placeholder='First Name'></input>
        <input type="text" className={styles.registerInputFields} placeholder='Last Name'></input>
        <input type="text" className={styles.registerInputFields} placeholder='Email'></input>
        <input type="text" className={styles.registerInputFields} placeholder='Contact Number'></input>
        <input type="button" className={styles.registerButton} value='Register'></input>

      </form>
    </main>
    </>
  )
}
