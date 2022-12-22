import React from 'react';
import LoaderImg from "../assets/images/page-load.jpg"
function Loader() {
    return ( 
        <div className='loader text-center font-extrabold text-3xl text-white bg-black'>
            <img src={LoaderImg} alt="" />
            <h1 className='mt-4'>Please wait, loading...</h1>
        </div>
     );
}

export default Loader;