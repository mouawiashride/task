import React from 'react'
import Paragraph from '../Paragraph/Paragraph'

import Review from '../Review/Review'
import SideBar from '../SideBar/SideBar'

export default function Home() {
  return (
    <div dir='rtl' className=' px-[120px] grid gap-x-12  grid-cols-2  overflow-hidden  ' >
        <SideBar/>
        <Paragraph/>
        <Review/>
     
    </div>
  )
}
