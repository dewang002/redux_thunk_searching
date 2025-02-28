import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const members = useSelector( state => state.cart.cartData)
  const navigate = useNavigate()
  return (
    <div className='flex justify-between px-4'>
        <button onClick={()=>navigate('/')} className='text-white relative bg-green-700 p-2 rounded'>
          Home
        </button>
        <button onClick={()=>navigate('/members')} className='text-white relative bg-green-700 p-2 rounded'>add
          <div className='absolute h-6 w-6 flex justify-center items-center top-[-12px] right-[-2px] bg-red-700 p-1 rounded-full'>
            {members.length}
          </div>
        </button>
    </div>
  )
}

export default Nav