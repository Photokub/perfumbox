import React from "react"
import './Card.css'
import image from '../../images/item.png'

export function Card() {
    return (
        <section className='card'>
            <img className='card__image-button' src={image}/>
        </section>
    )
}