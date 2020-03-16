import React, { useState } from 'react';
import axios from 'axios';

export default function Mail() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  const handleClick = (e) => {
    e.preventDefault()

    if (e.target.id === "name") {
      setName(e.target.value)
    } else if (e.target.id === "email") {
      setEmail(e.target.value)
    } else {
      setMessage(e.target.value)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()

    await axios.post('/api/form', {
      name,
      email,
      message
    })
    setName('')
    setEmail('')
    setMessage('')
  }


  return (
    <div className="email">
      <h3>Email Us</h3>
      <form onSubmit={handleSubmit}>
        <p>
          <input id="name" placeholder="Name" value={name} onChange={handleClick} />
        </p>
        <p>
          <input id="email" placeholder="Email" value={email} onChange={handleClick} />
        </p>
        <p className="full">
          <textarea id="message" placeholder="Text . . ." value={message} onChange={handleClick} />
        </p>
        <p>
          <button onClick={handleSubmit}>Send Email</button>
        </p>
      </form>
    </div>
  )
}
