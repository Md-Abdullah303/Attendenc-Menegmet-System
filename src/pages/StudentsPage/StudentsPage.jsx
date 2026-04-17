import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import StudentPageCardContainer from '../../component/StudentPageCardContainer/StudentPageCardContainer';
import { ClockLoader } from 'react-spinners';

const StudentsPage = () => {
    const studentsData = useLoaderData();
    return (
        <div className='w-[90%] sm: space-y-3.5 container mx-auto pt-20 pb-10'>
            <div className="flex items-center justify-between gap-5">
                <h1 className='text-xl sm:text-3xl md:text-4xl font-bold italic text-green-950'>Our Students</h1>
                <input className='bg-gray-200 py-2 px-4 sm:w-[15vw] text-lg outline-none rounded-lg' type="text" placeholder='Search' />
            </div>

            <Suspense fallback={<ClockLoader />}>
                <StudentPageCardContainer studentsData={studentsData}></StudentPageCardContainer>
            </Suspense>

        </div>
    );
};

export default StudentsPage;