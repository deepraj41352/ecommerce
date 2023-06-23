import React from 'react'
import './header.css'
import Medicine from '.././../data/image/Medicine.svg';
import { AiOutlineSearch } from "react-icons/ai";
import Card from './card';
import User from './user';
// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
     <header className='header'>
        <div className='fsCont flex'>
            <div className='logo'>
                <img src={Medicine} alt='Medicine' />
            </div>
            <div className='searchCon flex'>
                <AiOutlineSearch className='searchIcon'/>
                <input type='text' placeholder='Search ...'/>
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
