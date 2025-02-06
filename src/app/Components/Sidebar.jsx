import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div className='flex flex-col justify-start items-start gap-2 text-black pt-40 pl-6 bg-lime-200 min-h-screen'>
           <Link href={'/'}><button className='btn'>Home</button></Link>
           <Link href={'/Dashboard'}><button className='btn'>Dashboard</button></Link>
           
        </div>
    );
};

export default Sidebar;