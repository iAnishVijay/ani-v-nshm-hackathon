import styles from '../page.module.css'
import React from 'react'
import Image from 'next/image'


const EventCard = (props) => {
    return (
        <div className={styles.eventCard}>
            <Image src={props.image}>
            </Image>
            <div className={styles.eventCardOverlay}>

            </div>
            <p className={styles.eventCardText}>{props.title}</p>
        </div>
    );
}

export default EventCard;