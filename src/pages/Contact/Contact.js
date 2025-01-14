import React, { useEffect, useState } from 'react'
import Axios from "../../Axios/Axios"
import "./Contact.css"
function Contact() {
    const [data, setdata] = useState([])
    const [name, setName] = useState([])
    const [lastname, setLastname] = useState([])
    const [email, setEmail] = useState([])
    const [text, setText] = useState([])
    const [tel, setTel] = useState([])
    console.log(data)
    useEffect(() => {
        const getApi = async () => {
            await Axios.get("/telegram")
                .then(res => setdata(res.data))
                .catch(error => console.error(error))
        }
        getApi()
    }, [])

    const formSubmit = async (e) => {
        e.preventDefault()
        let newuser = {
            name,
            lastname,
            email,
            text,
            tel
        }
        await Axios.post("/telegram", newuser)
            .then(res => console.log(res))
            .catch(error => console.log(error))

        setName("")
        setEmail("")
        setText("")
        setTel("")
        setLastname("")
    }
    return (
        <div className='Conatact'>
            <form action="" onSubmit={formSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Name...' onChange={(e) => setName(e.target.value)} />
                <label htmlFor="">Lastname</label>
                <input type="text" placeholder='Lastname...' onChange={(e) => setLastname(e.target.value)} />
                <label htmlFor="">Phone Number</label>
                <label className='phone_label' htmlFor="">+998 <input type="number" name="" id="" placeholder='Phone Number...' onChange={(e) => setTel(e.target.value)} /></label>
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="" >Text</label>
                <input type="text" placeholder='Text' onChange={(e) => setText(e.target.value)} />
                <button>SEND</button>
            </form>
        </div>
    )
}

export default Contact
