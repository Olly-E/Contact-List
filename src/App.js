import './App.css';
import Contacts from './Contacts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddContacts from './AddContacts';
import ContactView from './ContactView';


function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route exact path="/">
        <Contacts />
      </Route>
      <Route path="/addcontact">
        <AddContacts />
      </Route>
      <Route path="/contacts/:id">
        <ContactView />
      </Route>
      <Route path="/contacts/editcontact">
        <ContactView />
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
