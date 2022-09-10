import styles from './Arrow.module.scss'

export const Arrow = () => {

    return(
        <div className={styles.arrow}>
            <button className={styles.prev}>&#8678;	Previous</button>
            <button className={styles.next}>Next &#8680;	</button>
        </div>
    )
}