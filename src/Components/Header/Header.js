import React from 'react';
import logo from '../../img/header-logo.jpg'
const Header = () => {
    return (
        <div>
            <section className='md:flex items-center justify-evenly my-16'>
                <img className='w-2/6 border rounded-md drop-shadow-2xl' src={logo} alt="" />
                <div>
                    <h2 className='text-2xl font-mono font-semibold text-gray-800'>Game With Brain & More Learning Mor Enjoy</h2>
                    <p>this website basically build for programming practice, i think learner you must be enjoy this type game.!!!</p>
                </div>
            </section>
        </div>
    );
};

export default Header;