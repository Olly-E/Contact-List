import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

const AddContacts = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const contact = { name, number, email }
        
        fetch('http://localhost:8000/contacts', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(contact)
        }).then(() => {
            console.log('added one more to the pile of people you do not call')
           history.push('/');
        })
        
      }

  return (
      <div className="test">
          <Link to="/"><FaArrowLeft className="go-back"/></Link>
    <form className="input" onSubmit={handleSubmit}>
        <h2>Save contact</h2>
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <label>Number</label>
        <input type="tel" value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <label>Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button className="save">Save</button>
    </form>
    </div>
  )
}

export default AddContacts