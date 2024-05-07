import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Hero({getKeyword , value}) {
  return (
    <div className='h-60 flex justify-center items-center text-white font-extrabold text-4xl rounded-t-2xl'>
      <label className='flex gap-5 items-center bg-emerald-900 p-12 rounded-lg bg-opacity-90 shadow-lg'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input 
          type="text" 
          placeholder='ค้นหาแหล่งท่องเที่ยวของคุณ...' 
          className='px-5 py-2 rounded-lg text-black text-lg'
          onChange={(e)=>{
            getKeyword(e.target.value)
          }}
          value={value}
        />
      </label>
    </div>
  )
}
