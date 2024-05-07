import React from 'react'

export default function NavigationBar() {
  return (
    <div className='h-20 shadow-xl flex md:justify-between max-md:justify-center px-20 items-center font-bold text-white bg-emerald-900 bg-opacity-70'>
        <h1 className='text-2xl font-bold opacity-100'>Where should I go?</h1>
        <ul className='flex gap-5 justify-center items-center max-md:hidden'>
            <li>
                <a href="#" className='hover:shadow-lg hover:font-extrabold'>This Week Deal</a>
            </li>
            <li>
                <a href="#" className='hover:shadow-lg hover:font-extrabold'>Login</a>
            </li>
        </ul>
    </div>
  )
}
