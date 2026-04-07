import React from 'react';

const ContactList = (props) => {
    const renderContactList = props.contact.map((contact) => {
        return (
            <div key={contact.id} className="flex justify-between items-center border-b border-gray-500 py-4 px-2">
                <div className="flex flex-col">
                    <div className="text-lg font-bold text-white">
                        {contact.name}
                    </div>
                    <div className="text-gray-300 text-md">
                        {contact.email}
                    </div>
                </div>
                <div className="text-red-500 cursor-pointer">
                    <i className="trash alternate outline icon large"></i>
                </div>
            </div>
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