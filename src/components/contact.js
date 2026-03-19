import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
    const [user, setUser] = useState(
        {
            name:'', email:'', subject:'', message:''
        }
    )
    let values, names
    const data = (e) =>{
        values = e.target.value
        names = e.target.name
        setUser({...user,[names]: values})
    }
    const send = async (e) =>{
        const {name, email, subject, message} = user
        e.preventDefault()
        const option = {
            method: 'POST',
            headers:{
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({
                name, email, subject, message
            })
        }
        const send = await fetch('https://react-ecommerce-contact-78373-default-rtdb.firebaseio.com/Message.json', option)
        if (send){
            alert("Message Sent SUCCESSFULLY!!")
        }else{
            alert('Error Occoured!! Message Sent Failed')
        }
    }
  return (
    <>
        <div className='contact'>
            <div className='container'>
                <div className='contact_form'>
                    <h2>Contact us</h2>
                    <p>Home . Contact</p>
                    <form method='POST'>
                        <div className='box'>
                            <div className='lable'>
                                <h4>Name</h4>
                            </div>
                            <div className='input_box'>
                                <input type='text' placeholder='Name' value={user.name} name='name' onChange={data}></input>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='lable'>
                                <h4>E-mail</h4>
                            </div>
                            <div className='input_box'>
                                <input type='email' placeholder='E-mail' value={user.email} name='email' onChange={data}></input>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='lable'>
                                <h4>Subject</h4>
                            </div>
                            <div className='input_box'>
                                <input type='text' placeholder='Subject' value={user.subject} name='subject' onChange={data}></input>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='lable'>
                                <h4>Message</h4>
                            </div>
                            <div className='input_box'>
                                <textarea placeholder='Write your message here' value={user.message} name='message' onChange={data}></textarea>
                            </div>
                        </div>
                        <button type='submit' onClick={send}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact