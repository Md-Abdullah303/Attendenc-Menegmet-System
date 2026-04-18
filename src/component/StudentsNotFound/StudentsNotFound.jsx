import React from 'react';
import notfoundImg from '../../assets/App-Error.png'

const StudentsNotFound = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-2.5 py-4 border border-gray-300 rounded-xl bg-base-200'>
           <img className='p-4' src={notfoundImg} alt='data no found' />
           <h1 className='text-xl sm:text-3xl text-green-700 font-bold'>Data Not Found</h1>
           <p className='text-sm sm:text-lg font-semibold text-gray-600'>Pless try later...</p>
        </div>
    );
};

export default StudentsNotFound;