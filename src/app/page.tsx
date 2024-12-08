import React from 'react'
import Hero from './home/page'  
import List from './product-listing/page'
import Cart from './shopping-basket/page'
import Head from 'next/head';
import Signup from './auth/signup';

const page = () => {
  return (
    <div>
   <Hero/>
   <List/>
   <Cart/>
   <Signup/>
    </div>
  )
}

export default page