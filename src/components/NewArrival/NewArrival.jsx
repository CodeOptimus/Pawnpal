import React from 'react';
import { assets } from '../../assets/assets'

function NewArrival() {
  return (
    <>
      <div className='new-arrival'>
        <h2 className='new-arrival-heading'>New Arrivals</h2>
        <p>Grab our latest arrivals before they sell out!<br />
Don't miss out on the freshest trends and hottest deals!</p>

        <div className='new-arrival-container'>
            <div className='new-arrival-item'>
                <img src={assets.Phone} alt='phone' />
                <p className='item-name'>Phones</p>
            </div>
    
            <div className='new-arrival-item'>
                <img src={assets.Watch} alt='watch' />
                <p className='item-name'>Watches</p>
            </div>
    
            <div className='new-arrival-item'>
                <img src={assets.Furniture} alt='furniture' />
                <p className='item-name'>Furniture</p>
            </div>
    
            <div className='new-arrival-item'>
                <img src={assets.Laptop} alt='laptop' />
                <p className='item-name'>Laptops</p>
            </div>
    
            <div className='new-arrival-item'>
                <img src={assets.Shoes} alt='shoes' />
                <p className='item-name'>Shoes</p>
            </div>
    
            <div className='new-arrival-item'>
                <img src={assets.Electronics} alt='electronics' />
                <p className='item-name'>Electronics</p>
            </div>
    
            <div className='new-arrival-item'>
                <img src={assets.Bags} alt='bags' />
                <p className='item-name'>Bags</p>
            </div>
    
            <div className='new-arrival-item'>
                <img src={assets.Accessories} alt='accessories' />
                <p className='item-name'>Accessories</p>
            </div>
        </div>
      </div>

    </>
  )
}

export default NewArrival
