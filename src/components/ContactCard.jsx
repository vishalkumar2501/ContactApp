import React from 'react'

const ContactCard = (props) => {
    const {id ,name, email} = props.contact;
  return (
    <div>
         <div key={id} className="flex justify-between items-center border-b border-gray-500 py-4 px-2">
                <div className="flex flex-col">
                    <div className="text-lg font-bold text-white">
                        {name}
                    </div>
                    <div className="text-gray-300 text-md">
                        {email}
                    </div>
                    <div>

                    </div>
                </div>
               
            </div>

    </div>
  )
}

export default ContactCard