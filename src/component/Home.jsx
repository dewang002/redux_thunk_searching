import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData } from './store/user/thunk'
import Search from './Search'
import Nav from './Nav'

const Home = () => {
  const [users, setUsers] = useState()
  const dispatch = useDispatch()
  const { userData, loading, error } = useSelector( state => state.user )

  useEffect(()=>{
   dispatch(fetchUserData()) 
  },[dispatch])
  
  useEffect(()=>{
    setUsers(userData)
  },[userData])

  const filterUser = (name) =>{
    if (!name.trim()) {
      setUsers(userData)
      return;
    }
   const filteredUser =  users?.filter( elem => elem.name.toLowerCase().includes( name.toLowerCase() ))
   setUsers(filteredUser);
  }

  if(loading)return "loading..."
  if(error)return <h1>{error.message}</h1>
  return (
    <div className='h-full w-full pt-8 bg-linear-to-r from-gray-900 via-blue-700 to-gray-900'>
      <Nav />
      <Search onSearch={filterUser} />

       <div className='flex flex-row flex-wrap mt-8 items-center justify-center gap-10'>
        {
          users?.map( item => {
            return <React.Fragment key={item.id}>
            <Card name={item.name} email={item.email} webLink={item.website} />
           </React.Fragment>
          })
        }
        </div>

    </div>
  )
}

export default Home