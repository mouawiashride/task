import React from 'react'
import ReviewLogic from './ReviewLogic';



export default function Review() {

const {Questions } = ReviewLogic();

const RenderQuestion = Questions?.map((Question,index)=>{
 return( <div key={Question.idQ} className='basicSection'>
          <h3 className='basicTitle	'>
          {Question.title}
          </h3>
          <p >
          {Question.content}
          </p>
   {
   Question.type === 'text' ? ( <>    <p className='font-light my-5'>
   إجابتك
 </p>
 <textarea placeholder='اكتب هنا '  minLength={Question.condition[0]}
maxLength={Question.condition[1]}  rows={4}  className='textArea' />
<span >
   {Question.condition[1]}/{Question.condition[0]}
</span> </>)   : (<div className='flex flex-col' >
  {
    Question.options.map((option,index)=>{
      return (   <div key={index}> 
       <input className='InputRadio '  type='radio' id={index}  name={Question.idQ}  />
     <label htmlFor={index} className='hover:cursor-pointer'  >  {option}</label>
      </div> )
    })
  }
</div>)
  }
        </div>
 );
})

  return (
    <div className=' pl-3 overflow-x-hidden'>
    
    {
    Questions?.length  ?   RenderQuestion : <div className='flex text-red-600 items-center justify-center p-[40px]'> there is no Questions for this Paragraph Try Again later </div>
     
    }


     
         
    </div>
  )
}
