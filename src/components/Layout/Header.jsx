
import Logo from "../../assets/svg/3.svg?react";
import { LuDownload } from "react-icons/lu";
function Header({ handleDownload }) {
  return (
    <header className="bg-primaryBlue text-white p-3 shadow-md">
      <div className=" mx-6 flex justify-between items-center">
        <Logo className='w-20 h-auto' />
  
        <button
          onClick={handleDownload}
          className="ml-4 bg-gray-600 rounded-full p-2 shadow-lg hover:bg-gray-500 active:bg-gray-600  cursor-pointer"
        >
          <LuDownload  className="text-white w-6 h-6" />
        </button>

      </div>
    </header>
  );
}

export default Header;
