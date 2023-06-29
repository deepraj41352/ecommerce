import React from 'react'
import {order} from '../../Assest_data/data'
export default function Order() {
  return (
    <>
      <section className='order'>
        <div className='container grid boxItem'>
            {order.map((item)=>(
                <div className='box flexCenter' key={item}>
                    <div className='num'>
                        <h1>{item.id}</h1>
                    </div>
                    <div className='text'>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </>
  )
}
