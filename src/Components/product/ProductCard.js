import React from "react"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import CardSlice from "../../store/CardSlice"


export const ProductCart = ({ key, id, cover, name, price }) => {
 
  const dispatch = useDispatch()
  const addToCard = () => {
    dispatch(cartActions.addToCard({ id, cover, name, price}))
  }
  return (
    <>
      <div className='box boxItems' id='product'>
        <div className='img'>
          <Link>
            <img src={cover} alt='cover' />
          </Link>
        </div>
        <div className='details'>
          <h3>${price}</h3>
          <p>{name}</p>
          <button onClick={addToCard}>
            <AiOutlinePlusCircle />
          </button>
        </div>
      </div>
    </>
  )
}
export const cartActions = CardSlice.actions