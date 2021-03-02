import React from 'react'
import './Product.css'
import {useStateValue} from "./StateProvider"

function Product({id,title,price,rating,image}) {
    const [{},dispatch] = useStateValue();
    
    const addtobasket = () => {
        //add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item:  {
                id: id,
                title: title,
                image: image,
                rating: rating,
                price: price,
            },
        })

    };


    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price"><small>₹</small><span>{price}</span></p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => ('⭐'))
                    }
                </div>
            </div>
            <img className="product__image" src={image} alt="product_Image" />
            <button onClick={addtobasket}>Add to Cart</button>
        </div>
    )
}

export default Product
