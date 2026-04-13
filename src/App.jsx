import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'


const App = () => {

    const [contact, setContact] = useState([])

  return (
    <div className=' flex flex-col min-h-screen bg-gray-600'>
       <Header />
       <AddContact />
       <ContactList contact={contacts} />

    </div>
  )

}

export default App