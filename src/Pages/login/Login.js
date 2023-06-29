import React from 'react'
import back from '../../Assest_data/image/my-account.jpg'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store/authSlice'

export default function Login() {

  const dispatch = useDispatch()
  const handlSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>My Account</h1>
            </div>
          </div>

          <form onSubmit={handlSubmit}  >
            <span>Username or Email address</span>
            <input type='text' required />
            <span>Password * </span>
            <input type='password' required />
            <button className='button'>Log in </button>
          </form>
        </div>
      </section>
    </>
  )
}
