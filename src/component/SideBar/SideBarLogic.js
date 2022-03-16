import React, { useState } from 'react'

//files will be passed to SideBar
const files = [
    { nameFile:'ملحق 1' },
    { nameFile:'ملحق 2' },
    { nameFile:'ملحق 3' },
    { nameFile:'ملحق 4' },
    { nameFile:'ملحق 5' },
    { nameFile:'ملحق 6' },
    { nameFile:'ملحق 7' },
    { nameFile:'ملحق 8' }
]
export default function SideBarLogic() {
    //get statue of sideBar
    const [openSide,setOpenSlide]  =useState(false);

    //toggle sideBar
    function toggleSideBar ()
    { setOpenSlide(!openSide);
        const sidebar = document.getElementById('sidebar');
        const listSideBar= document.getElementById('listSideBar');
        if(!openSide)
        {
            sidebar.classList.remove('-translate-x-[100vw]');
            listSideBar.classList.remove('hidden');
        }
        else{
            sidebar.classList.add('-translate-x-[100vw]');
            listSideBar.classList.add('hidden');      
        }
    }
  return{toggleSideBar,files};
}

