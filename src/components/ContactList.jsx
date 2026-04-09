
import React from 'react';
import ContactCard from '../components/ContactCard';

const ContactList = (props) => {
    const renderContactList = props.contact.map((contact) => {
        return (
           <ContactCard contact={contact} />
        );
    });

    return (
        <div className="bg-[#3d4451] min-h-screen p-10">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col">
                    {renderContactList}
                </div>
            </div>
        </div>
        
    );
}

export default ContactList;