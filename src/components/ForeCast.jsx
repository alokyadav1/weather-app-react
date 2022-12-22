import React from 'react';
function ForeCast(props) {
    const date = new Date();
    const currentTime = date.getHours();
    return (
        <div className='forecast-container'>
            <h1 className='font-bold text-xl text-center'>Today <span className='text-sm text-slate-300'>( {props.forecast[0].date} )</span></h1>
            <div className='currentDay-forecast-container bg-zinc-600 shadow-2xl py-2'>
                <div className='flex items-center gap-2 overflow-x-auto mx-2'>
                    {
                        props.forecast[0].hour.map(d => {
                            const ApitimeInput = d.time;
                            const ApidateTime = ApitimeInput.split(" ");
                            const Apitime = ApidateTime[1];
                            const hour = Number(Apitime.split(":")[0]);
                            return (
                                hour >= currentTime &&
                                <div className='forecast-data text-center p-4 text-sm h-28 my-2'>
                                    <p>{Apitime}</p>
                                    <img src={d.condition.icon} alt="" />
                                    <p>{d.temp_c}&#8451;</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ForeCast;