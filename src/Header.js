import React from 'react'
import {Link} from "react-router-dom"
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import {useStateValue} from "./StateProvider"

function Header() {

    const [{basket}] = useStateValue();
    console.log(basket);
    return (
        <nav className="header">
            {/* logo */}
            <Link to="/" >
                <img 
                className="header__logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3681uVLYlNHmaFSRqf0XGZED3R8un3NaIFg&usqp=CAU"
                alt="amazon-logo" />
            </Link>

            {/* location */}
            <div className="header__location">
                <LocationOnOutlinedIcon className="header__locationIcon" color="primary"/>
                <div className="header__locationText">
                    <span className="header__locationTextLine1">Hello ,</span>
                    <span className="header__locationTextLine2">Select your address</span>
                </div>
            </div>

            {/* search */}
            <div className="header__search">
                <input type="text" className="header__searchInput" ></input>
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 links */}
            <div className="header__nav">
                <Link className="header__link" to="/login">
                    <div className="header__option">
                        <span className="header__optionLine1">Hello, User</span>
                        <span className="header__optionLine2">Sign In</span>
                    </div>
                </Link>

                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="header__optionLine1">Returns</span>
                        <span className="header__optionLine2">& orders</span>
                    </div>
                </Link>

                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className="header__optionLine1">Your</span>
                        <span className="header__optionLine2">Prime</span>
                    </div>
                </Link>

                <Link className="header__link" to="/checkout">
                    <div className="header__option">
                        <span className="header__optionLine2 header__basketCount">{basket?.length}</span>
                        <ShoppingCartIcon className="header__optionLine1" />
                    </div>
                </Link>
            </div>

    
        </nav>
    )
}

export default Header