import React from 'react'

class AddContact extends React.Component { 
    render() {
        return (

            <div className="">
                <h2 className='p-5 text-4xl font-bold'> Add Contact</h2>
                <form className="p-5 text-2xl">
                    <div className='flex flex-col gap-2 pb-5'>
                        <label className=' font-bold'>Name</label>
                        <input type="text"
                               name="name"
                               placeholder="Enter your name" 
                               className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"'/>
                    </div>
                    <div  className='flex flex-col gap-2'>
                        <label className='font-bold'>Name</label>
                        <input type="text"
                               name="name" 
                               placeholder="Name"
                               className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"'/>

                    </div>

                    <button className='px-4 py-2 mt-8 text-white bg-blue-500 rounded-lg'>ADD</button>
                </form>
            </div>
        );
    }
}

export default AddContact