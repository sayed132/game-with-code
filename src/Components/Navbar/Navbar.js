import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='bg-gray-900 h-20 mx-auto md:flex items-center justify-between text-white'>


            <div className='md:ml-10'>
                <h1 className='font-bold text-purple-800 text-2xl'>Game With Brain</h1>
            </div>
            <div className='md:mr-10'>
                <div className=' nav-link flex justify-center mt-3'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;