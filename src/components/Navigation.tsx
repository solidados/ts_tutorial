import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <nav className='fixed w-[100%] h-[50px] flex justify-between px-5 bg-slate-600 items-center text-white'>
            <span className='font-bold font-mono'>Logotype</span>

            <span className='font-extralight space-x-2'>
                <Link to="/about" className='mr-4'>About</Link>
                <Link to="/">Products</Link>
            </span>
        </nav>
    )
}