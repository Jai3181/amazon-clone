import React from 'react'
import "./CheckoutProduct.css"

function CheckoutProduct({item, title, image, price, rating}) {
    console.log(item, title, image, price, rating + '----')
    return (
        <div className="checkoutproduct">
            <img src={image} alt="alt_checkoutproductimage" />
            <div className="chechoutproduct__info">
               <p className="checkoutproduct__title">{title}</p> 
               <p className="checkoutproduct__price"> <small>₹</small><strong>{price}</strong></p>
               <div className="checkoutproduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => ('⭐'))
                    }
                </div>
            </div>
            <button>Remove from basket</button>
        </div>
    )
}

export default CheckoutProduct
