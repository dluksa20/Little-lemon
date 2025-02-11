import React from 'react'
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from 'react-icons/md';
import './Card.css'



export default function Card(props) {
    let { title, item_price, currency, images} = props
    return (

        <div className="card">  
        <div className="wrapper">
                <div className="card-img">
                    <img src={images} alt={title} />
                </div>
                <div className="heart">
                    <CiHeart /> 
                </div>
                <div className="card-info">
                    <div className='card-title'>
                        <h1>{title}</h1>
                        <div className='ingredients-group'>
                            <button className='ingredient-1'>🍅Tomatoes</button>
                            <button className='ingredient-2'>🧄Garlic</button>
                            <button className='ingredient-3'>🍞Craft bread</button>
                        </div>
                    </div>
                    <div className="action">
                        <div className="price-group">
                            <p className="item-price">{currency}{item_price}</p>
                        </div>
                        <button className="cart">
                            <MdOutlineShoppingCart />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
