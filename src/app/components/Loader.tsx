import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loader = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <AiOutlineLoading3Quarters className='spin-in animate-spin text-3xl font-bold' />
        </div>
    );
};

export default Loader;