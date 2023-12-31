import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../utils/redux/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const user = useSelector((store) => store.user.users)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dropDown, setDropdown] = useState(false);
  const handleDropdown = () => {
    if (dropDown) {
      setDropdown(false)
    }
    else {
      setDropdown(true)
    }
  }
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logoutUser());
      navigate('/');
      //SignOut
    }).catch((error) => {
      console.log("an error occured")
    })
  }
  useEffect(() => {
    if (user.length === 0) {
      navigate('/')
    }
    else {
      navigate('/browse')
    }
  }, [])
  return (
    <div className={user.length > 0 ? 'bg-black flex' : 'bg-gradient-to-b from-black flex'}>
      <Link to="/"><img className='h-42 w-56' src={LOGO} alt='somneImg' /></Link>
      {user.length > 0 && (
        <div className='ml-auto mt-4 relative flex'>
          <div className='pt-2'>
            <Link to="/browse"><p className='text-white/75 font-bold text-lg '>Home</p></Link>
          </div>
          <div className='pt-2 mr-3'>
            <Link to="/search"><p className='text-white/75 font-bold text-lg pl-4'>Search</p></Link>
          </div>
          <div >
            <button className='text-md text-white/75 bg-gray-500 font-semibold font-sans p-3 rounded mr-2' onClick={handleDropdown}>
              {user[0].name}
            </button>
            {dropDown && (
              <ul className="absolute z-10 right-0 mt-2 w-40 bg-black/75 text-white border border-gray-300 rounded-md shadow-lg py-1">
                <li><button className='p-2' onClick={handleSignOut}>Sign Out</button></li>
              </ul>
            )}
          </div>
        </div>
      )}

    </div>
  )
}

export default Header
