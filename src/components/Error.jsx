import React from 'react';
function Error({errorMessage}) {
    return ( 
        <div>
            <h1 className=' font-extrabold text-3xl text-center bg-purple-700 text-white p-3 rounded-lg m-3 shadow-2xl'>{errorMessage}</h1>
        </div>
     );
}

export default Error;