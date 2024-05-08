import React from 'react'
import {appleImg, bagImg, searchImg} from "../utils"
import {navLists} from '../constants/index'

const Navbar = () => {
  return (
    <header className='w-full p-5 sm:px-10 px-6 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt='Apple' width={20} height={18}/>
            <div className='flex flex-1 justify-center max-sm:hidden'>
                {navLists.map((nav, index)=> (
                    <div key={index} className='px-5 cursor-pointer text-sm text-gray-400 hover:text-white transition-all '>
                        {nav}
                    </div>
                ))}
            </div>
            <div className='flex items-baseline max-sm:justify-end gap-7 max-sm:flex-1'>
                <img src={searchImg} alt="Search" width={18} height={18}/>
                <img src={bagImg} alt="bag" width={18} height={18}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar