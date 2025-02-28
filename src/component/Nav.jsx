import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-end px-4'>
        <button className='text-white relative bg-green-700 p-2 rounded'>add
          <div className='absolute h-6 w-6 flex justify-center items-center top-[-12px] right-[-2px] bg-red-700 p-1 rounded-full'>
            0
          </div>
        </button>
    </div>
  )
}

export default Nav