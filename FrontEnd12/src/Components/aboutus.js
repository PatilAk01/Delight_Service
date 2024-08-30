import React from 'react'
import { Link } from 'react-router-dom'
import HomeNav from './HomeNav'
//import Yagvendra from '../assets/yagvendra.jpg'
//import Tanmoy from '../assets/tanmoy.jpg'
const Aboutus = () => {
  return (
    <div style={{ backgroundColor: 'gainsboro' }}>
      <HomeNav />
      <h1 style={{ textAlign: 'center' }}> About us</h1>
      <div className='container' style={{ paddingTop: 50, paddingBottom: 50 }}>
        Delight Service brings you the essence of home-cooked meals with our delightful tiffin spreads. We meticulously prepare each meal using only the freshest seasonal ingredients and traditional recipes, ensuring every bite tastes like home.
    
        <br />
        <br />
        <br />
        <center><h2>Why us</h2></center>
        <h5>Freshness</h5>
        Enjoy freshly prepared meals crafted with seasonal ingredients.
        <br />
        <br />
        <h5>Variety</h5>
        Explore a variety of options to cater to your dietary preferences.

        Convenience
        We deliver right to your doorstep, whether at home or the office.
        <br />
        <br />
        <h5> Affordability</h5>
       
        Budget-friendly pricing without compromising on quality.


        <br />
        <br />
        <h6>Affordable prices.</h6>
        Customized lunch and dinner tiffin services in Mumbai start at just
        Rs.60/- The food that you eat is healthy, yummy at the same time it’s
        affordable.
        <br />
        <h6>Fresh ingredients.</h6>
        Everyday fresh vegetable of the best quality are procured to ensure that
        the food that you eat is good for your health.
        <br />
        <h6>Tasty Food.</h6>
        Our experienced chefs ensure that the food you eat has the perfect mix
        of spices. The food that you eat is not too spicy or too oily at the
        same time it’s very tasty.
        <br />
        <h6>Disposable containers.</h6>
        Food is packed in disposable plastic containers. All these containers
        are carefully packed in a disposable bag. This ensures that there are no
        chances of contamination.
        <br />
        <h6>No preservatives/ artificial color/pre-cooked gravies.</h6>
        No artificial preservatives, colors or pre-cooked gravies to make the
        food look attractive. The food that you eat is just like the way food
        cooked at home.
        <br />
        <h6>Experienced cooks.</h6>
        Our cooks have more than a decade of experience in catering industry.
        <br />
        <br />
      </div>
    </div>
  )
}
export default Aboutus
