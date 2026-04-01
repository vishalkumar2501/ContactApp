import React from 'react'

class AddContact extends React.Component { 
    render() {
        return (

            <div className="">
                <h2 className='p-5 text-4xl font-bold'> Add Contact</h2>
                <form className="p-5 text-2xl">
                    <div className='flex flex-col gap-2'>
                        <label className='flex flex-col gap-2'>Name</label>
                        <input type="text"
                               name="name"
                               placeholder="Enter your name" 
                               className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"'/>
                    </div>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddContact