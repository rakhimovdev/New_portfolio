import React from 'react'
import "./Contact.css"
function Contact() {
    return (
        <div className='Conatact'>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Name...' />
                <label htmlFor="">Lastname</label>
                <input type="text" placeholder='Lastname...' />
                <label htmlFor="">Phone Number</label>
                <label className='phone_label' htmlFor="">+998 <input type="number" name="" id="" placeholder='Phone Number...' /></label>
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" placeholder='Email...' />
                <label htmlFor="" >Text</label>
                <input type="text" placeholder='Text' />
                <button>SEND</button>
            </form>
        </div>
    )
}

export default Contact
