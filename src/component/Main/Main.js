import React from 'react'

import Home from './../pages/Home'
import Basic from '../Basic/Basic'
export default function Main() {
  return (
      <div className='grid h-screen grid-cols-1 grid-rows-[50px_full_50px] '>
      <Basic  content='Header'  />
      <Home/>
      <Basic content='Footer'/>
    </div>)
}
