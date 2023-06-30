import React from 'react'
import back from '../../Assest_data/image/my-account.jpg'
import './login.css'


export default function Register() {
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Register</h3>
              <h1>My Account</h1>
            </div>
          </div>

          <form>
            <span>Email address</span>
            <input type='text' required name='email'  />
            <span>Username * </span>
            <input type='text' required name='userName'  />
            <span>Password * </span>
            <input type='text' required name='password'  />
            <span>Confirm Password * </span>
            <input type='text' required name='pasword'  />
            <button className='button'>Register</button>
          </form>
          <a href='/'><button className='button2'>Log in</button></a>
        </div>
      </section>
    </>
  )
}
