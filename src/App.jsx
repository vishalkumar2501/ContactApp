import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'


const App = () => {

    const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    const id = Date.now().toString();   // unique id bana rahe hain

    const newContact = {
        id: id,
        name: contact.name,
        email: contact.email
    };

    const updatedContacts = [...contacts, newContact]; // purane + naya contact

    setContacts(updatedContacts); // state update
};
  return (
    <div className=' flex flex-col min-h-screen bg-gray-600'>
       <Header />
       <AddContact addContactHandler={addContactHandler} />
       <ContactList contact={contacts} />

    </div>
  )

}

export default App