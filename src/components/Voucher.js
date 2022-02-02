import React from 'react'
import './styles/Voucher.css'

const Voucher = () => {
    return(
        <div className='voucher'>
            <form>
                <h1>Get a Voucher Now!</h1>
                <p>Enter Your Identity to Get a Voucher</p>
                <label>Your Name</label>
                <input type="text" placeholder="Enter your name"/>
                <label>Your Email</label>
                <input type="email" placeholder="Enter your email"/>
                
                <button>Send</button>
            </form>
        </div>
    )
}

export default Voucher