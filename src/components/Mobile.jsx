import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import {AiOutlineClose} from 'react-icons/ai'

const Mobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div className="cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
        <HiMenuAlt3 size={40} color="white" />
      </div>
      {openMenu ? (
        <div className={`-top-4 left-0 right-0 w-full mt-2 bg-[#f7e135] p-1 fixed h-full z-20 ease-in-out duration-300 ${openMenu ? 'translate-x-0' : 'translate-x-full'}`}>
         <AiOutlineClose
         size={40}
         color='white'
         className='absolute top-8 right-8 cursor-pointer'
         onClick={() => setOpenMenu(!setOpenMenu)}
         />
         <div>
         <ul className="flex flex-col items-center justify-cnter gap-4 text-2xl mt-24 text-white">
          <li>Home</li>
          <li>About Us</li>
          <li>Blogs</li>
          <li>Contacts</li>
        </ul> 
         </div>
        </div>
      ) : null }

     
    </>
  );
};
export default Mobile;
