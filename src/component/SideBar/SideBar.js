import React from 'react'
import {AiOutlineFileText} from 'react-icons/ai'
import SideBarLogic from './SideBarLogic';
export default function SideBar() {
    const {toggleSideBar,files} = SideBarLogic();
const RenderFiles = files.map((file)=>{
    return(
        <div key={file.nameFile} className='flex flex-row justify-between px-10 my-2 bg-gray-200 p-3 rounded-2xl w-[80%] ml-[8%]'> 
        <button className='text-2xl '> +  </button> 
        <div className='inline-block'>
            {file.nameFile} <AiOutlineFileText className='inline' />
        </div>
    </div>      
    );
})
  return (
      <>
         <div className=' w-[100px] left-[-50px] p-2 bg-fuchsia-800 absolute top-[100px] rounded-xl '> <AiOutlineFileText  onClick={toggleSideBar}  className='  text-white  self-end h-[35px] w-[35px]  hover:cursor-pointer ml-[12px]'/></div> 
         <div id='sidebar'  dir='ltr' className='transition -translate-x-[100vw] duration-500 absolute top-[100px] left-0 w-[50vw]  bg-white' > 
                                <div className='bg-fuchsia-800 text-2xl text-white p-2 rounded-xl flex justify-between relative items-center'>
                                  
                                    <button className='pl-[12%]' onClick={toggleSideBar}  >&#xd7;</button>
                                    <label className='ml-auto' > الملحق  </label> 
                                    <AiOutlineFileText  onClick={toggleSideBar}  className=' self-end h-[35px] w-[35px] inline hover:cursor-pointer ml-[12px]' />
                                </div>
                                <div id='listSideBar' className=' hidden max-h-[40vh] overflow-y-scroll w-[90%] '>
                                    {
                                        RenderFiles?.length ? RenderFiles : <div className='text-red-500'> لايوجد هنا أي ملحق يرجى المحاولة لاحقا</div>
                                    }
                                </div>
         </div>
         
    </>
  )
}
