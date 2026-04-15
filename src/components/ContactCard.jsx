import React from 'react'

const ContactCard = (props) => {
    const {id ,name, email} = props.contact;  //child componenets to parent component || props Destructuring method
  return (
    <div>
         <div key={id} className="flex justify-between items-center border-b border-gray-500 py-4 px-2">
            <div className='flex items-center gap-4'>
                    <img 
                                 src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                 alt="avatar"
                                 className="w-10 h-10 rounded-full"
                    />
                <div className="flex flex-col">
                    <div className="text-lg font-bold text-white">
                        {name} 
                    </div>
                    <div className="text-gray-300 text-md">
                        {email}
                    </div>
                </div>
               </div>
                    <div>
                        <button
                            onClick={() => props.deleteContactHandler(id)}
                            className="inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                        >
                            Delete
                        </button>
                    </div>
            </div>

    </div>
  )
}

export default ContactCard