import React from 'react';
function CityInfo(props) {
    return ( 
        <div className='w-full'>
            <div className='text-white text-center'>
                <p>region:{props.region}</p>
                <p>country:{props.country}</p>
                <p>Time Zone:{props.timeZone}</p>
            </div>
        </div>
     );
}

export default CityInfo;