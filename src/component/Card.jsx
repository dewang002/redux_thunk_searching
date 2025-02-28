import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({name,email,webLink}) => {
  return (
    <div className='card flex flex-col text-center justify-center h-40 w-60 bg-linear-to-r rounded from-purple-200 via-violet-400 to-indigo-600'>
            <h1>{name}</h1>
            <h3>{email}</h3>
            <Link>{webLink}</Link>
        </div>
  )
}

export default Card