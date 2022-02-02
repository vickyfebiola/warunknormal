import React from 'react'
import './styles/Home.css'
import home from './assets/home.png'

const Home = () => {
    return(
        <section className='main-section'>
            <div className='container'>
                <div className='texts'>
                    <h1>Welcome!</h1>
                    <h1 className='big'>Warunk Normal</h1>
                    <p>indomie-roti bakar-susu segar-kopi gayo</p>
                </div>

                <div className='image'>
                    <img src={home}></img>
                </div>

            </div>
        </section>
    )
}

export default Home