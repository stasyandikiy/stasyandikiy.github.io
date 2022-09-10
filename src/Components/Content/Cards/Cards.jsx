import { Card } from './Card/Card'
import './Cards.scss'
import { useState } from 'react'
import { Arrow } from '../Arrow/Arrow';

export const Cards = (props) => {

    const [classCards, setClassCards] = useState('cards');

    const changeClassCards = () =>{
        if(classCards == 'cards'){
            setClassCards('cardsChange')
        }else if(classCards == 'cardsChange'){
            setClassCards('cards')
        }
    }


    return(
        <div className={classCards} >
            <Card   valueSearch={props.valueSearch}
                    changeClassCards={changeClassCards}
                    />
            <Arrow />            
        </div>
    )
}