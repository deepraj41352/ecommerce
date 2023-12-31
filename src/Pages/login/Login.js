import React, {useState}from 'react'
import back from '../../Assest_data/image/my-account.jpg'
import { useDispatch} from 'react-redux'
import { authActions } from '../../store/authSlice'

export default function Login() {

  const [showValue, setShowvalue] = useState({
    userName:'',
    password:''
  });
  function onChangeValue(e){
    const newObj = {...showValue,[e.target.name]:e.target.value}
    setShowvalue(newObj); 
    console.log(newObj);
  }
  const dispatch = useDispatch()
  const handlSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.login({userName:showValue.userName}))
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
            <input type='text' required name='userName' onChange={onChangeValue}/>
            <span>Password * </span>
            <input type='password' required name='password' onChange={onChangeValue} />
            <button className='button'>Log in </button>
          </form>
          <a href='register'><button className='button2'> Create New Account </button></a>
        </div>
      </section>
    </>
  )
}
