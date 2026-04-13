import React from 'react'

class AddContact extends React.Component { 
    state ={
        name: "",
        email:"",
    };
     
         add = (e) =>{
            e.preventDefault();
            if(this.state.name === "" || this.state.email === ""){
                alert("All the fields are mandatory!");
                return;
            }
         }
    render() {
        return (

            <div className="">
                <h2 className='p-5 text-4xl font-bold'> Add Contact</h2>
                <form className="p-5 text-2xl" onSubmit={this.add}>
                    <div className='flex flex-col gap-2 pb-5'>
                        <label className=' font-bold'>Name</label>
                        <input type="text"
                               name="name"
                               placeholder="Enter your name" 
                               className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"'
                               value={this.state.name}
                               onChange={(e) => this.setState({ name: e.target.value })}/>
                    </div>
                    <div  className='flex flex-col gap-1'>
                        <label className='font-bold'>Email</label>
                        <input type="email"
                               name="email" 
                               placeholder="Enter your email"
                               className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"'
                               value={this.state.email}
                               onChange={(e) => this.setState({ email: e.target.value })}/>

                    </div>

                    <button className='px-4 py-2 mt-8 text-white bg-blue-500 rounded-lg'>ADD</button>
                </form>
            </div>
        );
    }
}

export default AddContact