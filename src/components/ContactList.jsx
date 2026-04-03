import React from 'react'

const ContactList = (props) => {  {/*Class components are written in CamelCase */} 

console.log(props)

const renderContactList = props.contacts.map((contact)=>{
    return (
        <div className=''>
            <div className=' '>
                <div className=''> {contact.name}</div>
                <div className=''> {contact.email}</div>
            </div>
            <i className='trash alternate outline icon'></i>
        </div>
    );
})

 return (
    <div className='p-5 text-3xl font-semiboldbold'>
         {renderContactList}
    </div>
  )
}

export default ContactList