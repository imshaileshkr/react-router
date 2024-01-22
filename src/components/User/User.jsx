import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userId } =  useParams()
  return (
    <>
    <div className='text-black font-bold text-2xl text-center p-5 bg-slate-500'>
    User Id : {userId}
    </div>
    </>
  )
}

export default User