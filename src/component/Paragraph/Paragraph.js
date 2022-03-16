import React from 'react';
import ParagraphLogic from './ParagraphLogic';

const {subject } = ParagraphLogic();
export default function Paragraph() {

  const RenderParagraph = subject.map((section)=>{
    switch (section.type)
    {
      case 'title':
        return (<h3 key={section.content} className='basicTitle	'>{section.content}</h3>);
      case 'paragraph':
        return <p key={section.content} className='my-[5px]' > {section.content}</p>
      case 'image':
        return ( <div key={section.content} className='max-w-4xl' >
                     <img src={section.url} alt={section.content} title={section.content} /> 
                </div>);
        default:
          break;
    }
  })

  return (
  
    <div className='p-9  border-l-[20px] border-white  overflow-y-auto overflow-x-hidden bg-white rounded-2xl px-5 py-8 my-[20px]  '>
      {subject.length ? RenderParagraph : <div className='text-red-700'> لا يوجد مقالة حاليا يرجى المحاولة لاحقا </div>  }
        </div>
    
  )
}


