import React, { useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../store/authSlice'

export default function User() {
  
  const user = true
  
  const [profileOpen, setProfileOpen] = useState(false)
 
  const close = ()=>{
    setProfileOpen(null)
  }

  const dispatch = useDispatch()
  
  const logOut = (e) => {
    dispatch(authActions.logout())
  }

  const userName = useSelector((state)=>state.auth.userName)
  return (
    <>
    <div className='profile'>
    {user ? (
    <>
         <button className='img' onClick={() => setProfileOpen(!profileOpen)}>
            <img src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='' />
         </button>

       {profileOpen && (<div className='openProfile boxItems' onClick={close}>
        <div className='image'>
          <Link to='/account'>
            <div className='img'>
            <img src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' alt='' />
            </div>
          </Link>
          <div className='text'>
            <h4>{userName}</h4>
            <label htmlFor=''>Los Angeles,CA</label>
          </div>
        </div>
              <Link to='/login'>
                <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                </button>
              </Link>
                <button className='box'>
                  <BsBagCheck className='icon' />
                  <h4>My Order</h4>
                </button>
                <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </button>
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Help</h4>
                </button>
                <button className='box' onClick={logOut} >
                  <BiLogOut className='icon'  />
                  <h4>Log Out</h4>
                </button>
        </div>
      )}
    </>
    ) : (
      <button>My Account</button>
    )}
    </div> 
    </>
  )
}
