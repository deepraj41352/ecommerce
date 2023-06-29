import React from 'react'
import {  AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import CardSlice from '../../store/CardSlice'


export default function CardItem({id, name, price, quantity, cover}) {

  const dispatch = useDispatch()

  const incCartitems = () => {
    dispatch(cartActions.addToCard({ id, name, price }))
  }
  const decCartitems = () => {
    dispatch(cartActions.removeFromCart(id))
  }
  const closeCartitems = () => {
    dispatch(cartActions.removeCart(id))
  }

  return (
    <>
     <div className='cardList' key={id}>
        <div className='cartContent'>
          <div className='img'>
            <img src={cover} alt=''/>
            <button className='remove flexCenter' onClick={closeCartitems}>
                <AiOutlineClose />
            </button>
          </div>
          <div className='details'>
            <p>{name}</p>
            <label htmlFor=''>Unit Price ${price}</label>
            <div className='price'>
              <div className='qty flexCenter'>
                <button className='plus' onClick={incCartitems} >
                  <AiOutlinePlus />
                </button>
                <button className='num'>{quantity}</button>
                <button className='minus' onClick={decCartitems} >
                  <AiOutlineMinus />
                </button>
              </div>
              <div className='priceTitle'>${price}</div>
            </div>
          </div>
        </div>
     </div>
    </>
  )
}
export const cartActions = CardSlice.actions

