import React from 'react'
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from 'react-icons/md';



export default function Card(props) {
    let bg_img = `url(${props.images})`
    let { title, item_price, currency} = props
    return (

        <div className="card">  
            <div className="wrapper">
                <div className="card-img" style={{ "backgroundImage": bg_img }}/>
                <div className="heart">
                    <CiHeart /> 
                </div>
                <div className="card-info">
                    <h1>{title}</h1>
                    <div className="action">
                        <div className="priceGroup">
                            <p className="item_price">{currency}{item_price}</p>
                        </div>
                        <button className="cart">
                            <MdOutlineShoppingCart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
