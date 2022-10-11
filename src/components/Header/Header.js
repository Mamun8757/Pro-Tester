import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav className='flex sm:justify-center space-x-8 text-2xl bg-slate-100 py-4'>
            <div className='site-logo'>
                <Link>Pro Tester</Link>
            </div>
            <Link to='/'>Home</Link>
            <Link to='/topics'>Topics</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blogs'>Blogs</Link>
        </nav>
    );
};

export default Header;