import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
 return (
  <div className='cards'>
   <h1>Check out these EPIC Destinations!</h1>
   <div className="cards__container">
    <div className="cards__wrapper">
     <ul className="cards__items">
      <CardItem 
       // src='images/img-9.jpg'
       src={require('../components/assets/images/img-9.jpg').default}
       text='Explore the hidden waterfall deep inside the Amazon Jungle'
       label='Adventure'
       path='/services'
      />
      <CardItem 
       // src='../images/img-2.jpg'
       src={require('../components/assets/images/img-2.jpg').default}
       text='Travel through the Islands of Bali in a Private Cruise'
       label='Luxury'
       path='/services'
      />
     </ul>
     <ul className="cards__items">
      <CardItem 
       // src='../images/img-9.jpg'
       src={require('../components/assets/images/img-3.jpg').default}
       text='Set Sail in the Atlantic Ocean visibility'
       label='Adventure'
       path='/services'
      />
      <CardItem 
       // src='../images/img-2.jpg'
       src={require('../components/assets/images/img-4.jpg').default}
       text='Experience Football on Top of the Himilayan Mountains'
       label='Luxury'
       path='/products'
      />
      <CardItem
       // src='../images/img-2.jpg' 
       src={require('../components/assets/images/img-8.jpg').default}
       text='Ride through the Sahara Desert on a guided'
       label='Luxury'
       path='/sign-up'
      />
     </ul>
    </div>
   </div>
  </div>
 );
}

export default Cards;

  // src={require('../components/assets/images/img-9.jpg').default} height={200} 
  //    width={200} alt='Travel Image' />