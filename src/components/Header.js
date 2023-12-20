import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const user = useSelector((store) => store.user.users)
  return (
    <div className='bg-gradient-to-b from-black flex'>
      <img  className='h-42 w-56' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='somneImg'/>
      {user.length>0 && (<div className='text-2xl text-white/50 ml-auto mt-3 font-bold font-sans'>Welcome {user[0].name}</div>)}
    </div>
  )
}

export default Header
