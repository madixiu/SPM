import Navbar from './Navbar'; // Adjust the import based on your file structure
import Header from './Header'; // Adjust the import based on your file structure
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes

function Layout() {
  return (
    <div className="flex flex-col max-h-screen">
      <div className='flex flex-col'>
        <Header />
      </div>
      <div className='flex flex-row h-[calc(100vh-12px)]'>
        <div className='flex h-full'>
          <Navbar />

        </div>
        <main className="flex-grow p-1">
          <Outlet /> {/* This renders the children (nested routes) */}

        </main>
      </div>

    </div>
  );
}

export default Layout;

