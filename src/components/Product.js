import React from 'react'
import './styles/Product.css'
import p1 from './assets/p1.jpg'
import p2 from './assets/p2.jpg'
import p3 from './assets/p3.jpg'

const Product = () => {
    return (
        <section className='product'>
            <h1>Products</h1>
            <div className="cart-container">
                <div className="cart">
                    <img src={p1} alt="" />
                    <h2>Roti Bakar</h2>
                    <p>Roti Bakar dengan berbagai topping melimpah spesial, wajib coba!</p>
                </div>

                <div className="cart">
                    <img src={p2} alt="" />
                    <h2>Indomie</h2>
                    <p>Indomie telor dengan topping spesial Warunk Normal, wajib coba!</p>
                </div>

                <div className="cart">
                    <img src={p3} alt="" />
                    <h2>Susu Segar</h2>
                    <p>Susu segar dengan beragam jenis yang enak khas Warunk Normal!</p>
                </div>

                <a href='https://google.com/'><button className='show-button'>Show More</button></a>
            </div>
        </section>
    )
}

export default Product