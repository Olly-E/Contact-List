import React from 'react';
import {FaEdit} from 'react-icons/fa'
import { Link } from 'react-router-dom';


const ContactCard = ({ contacts } ) => {
    
  return (
    <div className="card-div">
        {contacts.map((contact) => (
            <Link to={`/contacts/${contact.id}`}>
            <div className="content-trash">
            <div className="contact-content" key={contact.id}>
                <h3 className="cont-name">{contact.name}</h3>
                {/* <p className="cont-number">{contact.number}</p> */}
                <p className="cont-email">{contact.email}</p>  
            </div>
            <div className="content-icons">
            <Link to="/contacts/editcontact"><FaEdit /></Link>
            </div>
            </div >
            </Link>

        ))}
     
        
    </div>
  );
}

export default ContactCard;
