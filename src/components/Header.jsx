import logo from "../assets/logo.png";
import Mobile from "./Mobile";


const Header = () => {
  return (
    <header className=" relative mx-0 px-4 flex flex-row items-center justify-between bg-red-500 h-28">
      {/* logo */}
      <div>
        <img src={logo} alt="empowering ugandans" className="w-72" />
      </div>
      {/* Menu */}
      <div className=" hidden lg:flex items-center gap-10">
        <ul className="flex items-center gap-4 text-2xl text-white">
          <li>Home</li>
          <li>About Us</li>
          <li>Blogs</li>
          <li>Contacts</li>
        </ul>
        <button className="bg-[#f7e135] p-2 rounded-lg text-2xl">
          Support Us
        </button>
      </div>
      <div className='lg:hidden flex'>
       <Mobile />
        
      </div>
    </header>
  );
};
export default Header;
