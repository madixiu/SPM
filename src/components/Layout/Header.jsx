import Logo from  "../../assets/svg/3.svg?react"

function Header() {

  return (
    <header className="bg-primaryBlue text-white p-3 shadow-md">
      <div className="container mx-6 flex justify-between items-center">
        <Logo className='w-20 h-auto'/>
        {/* <h1 className="text-2xl font-bold">My Application</h1> */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;