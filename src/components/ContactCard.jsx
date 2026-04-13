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
                    <div >
                        <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                    </div>
            </div>

    </div>
  )
}

export default ContactCard