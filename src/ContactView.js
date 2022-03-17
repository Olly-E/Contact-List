import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { FaUserTie } from 'react-icons/fa'
import { FaHouseUser} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa'


const ContactView = () => {
    const {id} = useParams();
    const {data: contact, fetching, error } = useFetch('http://localhost:8000/contacts/' + id);
    const history = useHistory();
    const handleDelete = ( ) => {
        fetch('http://localhost:8000/contacts/' + contact.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

  return (
    <div className="contactView">
        <div className="view-link">
        <Link to="/"><FaArrowLeft /></Link>
        <FaHouseUser className="home-icon"/>
        </div>
       {fetching && <h3>fetching...</h3>}
       {error && <h3>{error}</h3>}
       {contact && <div>
           <FaUserTie className="user-icon"/>
           <div className="view-text">
           <h2 className="view-name">{contact.name}</h2>
           <p className="view-mail">{contact.email}</p>
           <hr className="divider" />
           <h2 className="view-no" >{contact.number}</h2>
           <hr className="divider" />
           </div>
           </div>}
           <FaTrash className="view-trash" onClick={handleDelete}/>
    </div>
  )
}

export default ContactView