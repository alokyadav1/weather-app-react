import React from 'react';
import NotFound from "../assets/images/notFound.jpg"
function Error({errorMessage}) {
    return ( 
        <div className='bg-white shadow-2xl'>
            <img src={NotFound} alt="" />
            <h1 className=' font-extrabold text-3xl text-center p-3 rounded-lg m-3'>{errorMessage}</h1>
        </div>
     );
}

export default Error;