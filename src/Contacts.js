import React from 'react';
import useFetch from './useFetch';
import ContactCard from './ContactCard';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa'


const Contacts = () => {
  const {data:contacts, fetching, error} = useFetch('http://localhost:8000/contacts')
  
  return (
    <div>
      <nav>
        <h3>search</h3>
        <Link to="/addcontact"><FaUserPlus /></Link>
      </nav>
      {contacts && <ContactCard contacts={contacts}/>}
      {fetching && <div>Fetching...</div>}
      {error && <div>{error}</div>}
    </div>
  )
}

export default Contacts