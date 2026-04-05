import React from 'react'
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'


const App = () => {

    const contacts = [
  { id: 1, name: "Rahul Sharma", email: "rahul.sharma@gmail.com" },
  { id: 2, name: "Priya Singh", email: "priya.singh@gmail.com" },
  { id: 3, name: "Amit Kumar", email: "amit.kumar@gmail.com" },
  { id: 4, name: "Neha Verma", email: "neha.verma@gmail.com" },
  { id: 5, name: "Rohit Gupta", email: "rohit.gupta@gmail.com" },
  { id: 6, name: "Anjali Mehta", email: "anjali.mehta@gmail.com" },
  { id: 7, name: "Vikas Yadav", email: "vikas.yadav@gmail.com" },
  { id: 8, name: "Sneha Patel", email: "sneha.patel@gmail.com" },
  { id: 9, name: "Arjun Singh", email: "arjun.singh@gmail.com" },
  { id: 10, name: "Kavita Joshi", email: "kavita.joshi@gmail.com" },
  { id: 1, name: "Rahul Sharma", email: "rahul.sharma@gmail.com" },
  { id: 2, name: "Priya Singh", email: "priya.singh@gmail.com" },
  { id: 3, name: "Amit Kumar", email: "amit.kumar@gmail.com" },
  { id: 4, name: "Neha Verma", email: "neha.verma@gmail.com" },
  { id: 5, name: "Rohit Gupta", email: "rohit.gupta@gmail.com" },
  { id: 6, name: "Anjali Mehta", email: "anjali.mehta@gmail.com" }
];
  return (
    <div className=' flex flex-col min-h-screen bg-gray-600'>
       <Header className="bg-green-200 h-2.5 w-full" />
       <AddContact />
       <ContactList contact={contacts} />

    </div>
  )

}

export default App