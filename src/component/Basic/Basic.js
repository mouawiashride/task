import React from 'react'
//that is component top and down of site
export default function Basic({content}) {
  return (
    <div className= ' bg-white  p-4 text-right '>
       <h2 className='mr-14'>
            {content}
       </h2>
    </div>
  )
}
