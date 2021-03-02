import React from 'react'
import "./Checkout.css"
import { useStateValue } from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is empty</h2>
                        <p>You have no items in your basket, To buy one or more items click on the Add to Basket button next to the items. Happy Shopping..!! </p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {/* list of checkout items */}

                            {
                                basket?.map((item) => {
                                    return (
                                        <CheckoutProduct
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            rating={item.rating}
                                            price={item.price}
                                        />)
                                }
                                )
                            }
                        </div>
                    )
                }
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}

        </div>
    )
}
export default Checkout
