import React from 'react'
import './styles/About.css'
import about from './assets/about.jpg'

const About = () => {
    return(
        <section className='section-2'>
            <h1 className='about'>About</h1>

            <div className='container-2'>
                <div className='image-container2'>
                    <img src={about}></img>
                </div>

                <div className='texts-2'>
                    <h3>Warunk Normal</h3>
                    <p>Warunk Normal adalah  restoran dengan desain modern minimalis yang dilengkapi free WiFi dan menu andalan fast food Indonesia seperti aneka hidangan Indomie, nasi goreng, roti bakar, dan lainnya.</p>
                </div>
            </div>
        </section>
    )
}

export default About