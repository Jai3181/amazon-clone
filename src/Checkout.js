import React from 'react'
import { useStateValue } from "./StateProvider"
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
    const [{ basket }] = useStateValue();

    // const removefrombasket = () => {

    // }
    return (
        <div className="checkout">
            {basket.length === 0 ? (
                <div>
                    <h2>Your shopping basket is empty</h2>
                    <p>You have no items in your basket, To buy one or more items click on the Add to Basket button next to the items. Happy Shopping..!! </p>
                </div>
            ) : (
                    <div>
                        <h2 className="checkout__title">Your shopping basket not empty</h2>
                        {/* list of checkout items */}

                        {
                            basket.map((abc) => {
                                return (
                                    <CheckoutProduct
                                        item={abc.id}
                                        title={abc.title}
                                        image={abc.image}
                                        rating={abc.rating}
                                        price={abc.price}
                                    />)
                            }
                            )
                        }
                    </div>
                )
            }
        </div>)
}
export default Checkout
