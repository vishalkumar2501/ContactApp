import React from 'react'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'


const App = () => {
  return (
    <div className=' flex flex-col min-h-screen bg-gray-600'>
       <Header className="bg-green-200 h-2.5 w-full" />
       <AddContact />
       <ContactList />

    </div>
  )
}

export default App