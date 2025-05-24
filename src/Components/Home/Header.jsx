import React from 'react';

const Header = () => {
    return (
        <div className='flex items-center gap-20 w-11/12 mx-auto bg-white text-black p-8 rounded-2xl'>
            <div className='flex flex-col gap-5'>
                <h1 className=' text-4xl font-bold '>Best Freelancer Site</h1>
                <p className='text-xl'>"Crafting high-quality, custom solutions for your business — on time, on budget, and beyond expectations."</p>
                <button className='btn bg-yellow-200 w-fit text-black  border-none'>Get Started</button>
            </div>
            <div><img className='w-full h-[400px]' src="/undraw_freelancer_vibs.png" alt="" /></div>
        </div>
    );
};

export default Header;