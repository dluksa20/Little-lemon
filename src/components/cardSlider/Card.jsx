import React, { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { MdOutlineShoppingCart } from 'react-icons/md';
import './Card.css';

export default function Card(props) {
    const { title, item_price, currency, images, ingredients, content } = props;
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle content expansion
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

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
                    <div className="card-title">
                        <h1>{title}</h1>
                        <div className="ingredients-group">
                            {ingredients &&
                                ingredients.map((ingredient, index) => (
                                    <button
                                        key={index}
                                        className={`ingredient-${index + 1}`}
                                        style={{ backgroundColor: ingredient.color }}
                                    >
                                        {ingredient.name}
                                    </button>
                                ))}
                        </div>
                        {/* Content with Read More toggle */}
                        <div className="card-content">
                            <p className={`content-text ${isExpanded ? 'expanded' : 'collapsed'}`}>
                                {content}
                            </p>
                            <button className="read-more" onClick={toggleExpand}>
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </button>
                        </div>
                    </div>
                    <div className="action">
                        <div className="price-group">
                            <p className="item-price">{currency}{item_price}</p>
                        </div>
                        <button className="cart-btn">
                            <MdOutlineShoppingCart />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}