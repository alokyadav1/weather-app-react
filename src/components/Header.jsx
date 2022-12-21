import React from 'react';
function Header({ handleSearch, handleChange, query, cityList, handleListClick }) {
    console.log(cityList);
    return (
        <div className='relative bg-slate-600 text-center'>
            <div className='header text-center p-3'>
                <h1 className='text-white font-bold text-3xl'>Weather APP</h1>
                <form action="/" method='post' className=' flex place-items-center justify-center gap-x-3 p-3 flex-wrap'>
                    <div>
                        <input type="text" className='search-box shadow-lg appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter City Name' value={query} onChange={handleChange} />
                        <div className='auto-suggestion relative'>
                            <ul className=' absolute top-0 left-0 z-10 bg-white w-full shadow-2xl text-left text-slate-700'>
                                {
                                    cityList.map(el => (
                                        <li onClick={() => handleListClick(el.name)}>{el.name},{el.country}</li>
                                    ))
                                }
                            </ul>
                        </div>
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