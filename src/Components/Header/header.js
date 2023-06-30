import React from 'react'
import './header.css'
import Medicine from '../../Assest_data/image/Medicine.svg';
import { AiOutlineSearch } from "react-icons/ai";
import Card from './Card';
import User from './User';
import { Link } from 'react-router-dom';

export default function Header() {


  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  })
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })

  return (
    <>
     <header className='header'>
        <div className='fsCont flex'>
           <Link to='/'>
              <div className='logo'>
                    <img src={Medicine} alt='Medicine' />
                </div>
           </Link>
            <div className='searchCon flex'>
                <AiOutlineSearch className='searchIcon'/>
                <input type='text' placeholder='Search ...' />
            </div>
            <div className='account flexCenter'>
                <Card />
                <User />
            </div>
        </div>
     </header>
    </>
  )
}
