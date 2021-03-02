import React from 'react'
import "./HomePage.css"
import Product from './Product'

function HomePage() {
    return (
        <div className="homepage">
            <div className="homepage__BannerImage">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>
            </div>
            <div className="homepage__row">
                <Product  
                    id={1}  
                    title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
                    price={379}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/31IdiM9ZM8L.jpg"
                />
                <Product  
                    id={2} 
                    title="pTron Tangent Lite Bluetooth 5.0 Wireless Headphones with Hi-Fi Stereo Sound, 6Hrs Playtime, Lightweight Ergonomic Neckband, Sweat-Resistant Magnetic Earbuds, Voice Assistant Mic - (Black)"
                    price={649}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41qhEf58vbL.jpg"
                />
            </div>
            <div className="homepage__row">
                <Product  
                    id={3}  
                    title="AVITA Essential NE14A2INC433-CR 14-inch Laptop (Celeron N4000/4GB/128GB SSD/Window 10 Home in S Mode/Integrated Graphics), Concrete Grey"
                    price={21799}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61NsZ6UrfPL._AC_UY218_.jpg"
                />
                <Product  
                    id={4} 
                    title="HP 15 db1069AU 15.6-inch Laptop (3rd Gen Ryzen 3 3200U/4GB/1TB HDD/Windows 10/MS Office/Radeon Vega 3 Graphics), Jet Black"
                    price={30674}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71JZWpHPV+L._AC_UY218_.jpg"
                />
                <Product  
                    id={5} 
                    title="
                    Lenovo IdeaPad Slim 3i Intel Celeron N4020 15.6-inch HD Thin and Light Laptop (4GB/256GB SSD/Windows 10/Platinum Grey/1.7Kg), 81WQ003LIN"
                    price={23990}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY218_.jpg"
                />
            </div>
            <div className="homepage__row">
                <Product  
                    id={6}  
                    title="Acer 31.5-inch (80.01 cm) Curved Full HD LED Backlit Computer Monitor with Stereo Speakers - ED322Q (White)"
                    price={16495}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/A1OUm0nT0uL._AC_UY218_.jpg"
                />
            </div>
        </div>
    )
}
export default HomePage