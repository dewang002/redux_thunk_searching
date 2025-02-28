import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from './store/addToCart/slice';
import Nav from './Nav';
const Members = () => {

  const members = useSelector( state => state.cart.cartData)
  const dispatch = useDispatch()

  return (
    <div className='h-full w-full pt-8 bg-linear-to-r from-gray-900 via-blue-700 to-gray-900'>
    <Nav/>
      <div className='flex flex-col mt-8 items-center justify-center gap-10'>
        {
            members.map( item => {
                return <div className="p-4 w-xl bg-green-400 rounded-full flex">
                <div>
                <h1>{item.name}</h1>
                <h3>{item.email}</h3>
                </div>
                <button onClick={()=>dispatch(deleteCart(item.id))}>REMOVE</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Members;