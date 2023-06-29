import React, { useState } from 'react'
import { BiShoppingBag } from "react-icons/bi";
import {AiOutlineClose} from 'react-icons/ai';
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

export default function Card() {

  const [cardOpen, setCardOpen] = useState(false);
  const closeCard = () => {
    setCardOpen(null)
  }

  const quantity = useSelector((state) => state.cart.totalQuantity)
  const cartItems = useSelector((state) => state.cart.itemsList)

  let total =0 
  const itemsLists = useSelector((state) => state.cart.itemsList)
  itemsLists.forEach((item) => {
    total += item.totalPrice
  })

  return (
    <>
      <div className='cardCon' onClick={()=>setCardOpen(!cardOpen)}>
            <BiShoppingBag className='cardIcon' />
            <span className='flexCenter'>{quantity}</span>
      </div>
      <div className={cardOpen ? 'overlay' : 'nonoverlay'}></div>
      <div className={cardOpen ? 'cardItem' : 'cardHide'}>
        <div className='title flex'>
            <h2>Shopping Card</h2>
            <button onClick={closeCard}>
                <AiOutlineClose className='icon' />
            </button>
        </div>
        {cartItems.map((item)=>(
          <CardItem 
          id={item.id} 
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          category={item.category}
          cover={item.cover}
          desc={item.desc}
          />
        ))}
        <div className='checkOut'>
          <button>
            <span>Priceed To Checkout</span>
            <label htmlFor=''>${total}</label>
          </button>
        </div>
      </div>
    </>
  )
}
