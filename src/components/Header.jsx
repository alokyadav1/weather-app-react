import React from 'react';
function Header({ handleSearch, handleChange, query }) {
    return (
        <div className='relative bg-slate-600 text-center'>
            <div className='headertext-center p-3'>
                <h1 className='text-white font-bold text-3xl'>Weather APP</h1>
                <form action="/" method='post' className=' flex place-items-center justify-center gap-x-3 p-3 flex-wrap'>
                    <div>
                        <input type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter City Name' value={query} onChange={handleChange} />
                    </div>
                    <button className=" bg-lime-50 hover:bg-lime-300 text-black font-bold py-2 px-4 my-2 rounded-3xl focus:outline-none focus:shadow-outline" type="button" onClick={handleSearch}>
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Header;