import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'


const App = () => {

    const [contact, setContact] = useState([])

    const addContactHandler = (contact) => {
        console.log(contact);
    }
  return (
    <div className=' flex flex-col min-h-screen bg-gray-600'>
       <Header />
       <AddContact addContactHandler={addContactHandler} />
       <ContactList contact={contacts} />

    </div>
  )

}

export default App