import styles from './Header.module.scss'
import { useState } from 'react';


export const Header = (props) => {


    return(
        <div className={styles.header}>
            <h2>Lorem ipsum</h2>
            <input type="text" placeholder='Search' onChange={(event)=> props.setValueSearch(event.target.value)}/>
        </div>
    )
}