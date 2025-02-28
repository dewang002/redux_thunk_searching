import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({name,email,webLink,onclick}) => {
  return (
    <div className='card flex flex-col text-center justify-center h-40 w-60 bg-linear-to-r rounded from-purple-200 via-violet-400 to-indigo-600'>
            <h1>{name}</h1>
            <h3>{email}</h3>
            <Link>{webLink}</Link>
            <button onClick={onclick} className='p-1 bg-zinc-400 text-white active:scale-97 transition duration-200'> Add +</button>
        </div>
  )
}

export default Card