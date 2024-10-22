import Navbar from './Navbar'; // Adjust the import based on your file structure
import Header from './Header'; // Adjust the import based on your file structure
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routes
import Pages from '../../pages/Pages';
import { useRef } from 'react';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useLocation } from 'react-router-dom';

function Layout() {

  const location = useLocation();
  const a4Ref = useRef();

  // Function to receive the ref from Pages
  const handleA4Ref = (ref) => {
    a4Ref.current = ref;
  };

  const handleDownload = async () => {
    const a4Element = a4Ref.current;

    const canvas = await html2canvas(a4Element, { useCORS: true, scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
    console.log(location.pathname.slice(1));
    
    pdf.save(location.pathname.slice(1));
  };
  return (
    <div className="flex flex-col max-h-screen">
      <div className='flex flex-col'>
        <Header handleDownload={handleDownload}/>
      </div>
      <div className='flex flex-row h-[calc(100vh-12px)]'>
        <div className='flex h-full'>
          <Navbar />

        </div>
        <main className="flex-grow p-1">
          <Pages passA4Ref={handleA4Ref}>
            <Outlet /> {/* This renders the children (nested routes) */}
          </Pages>
        </main>
      </div>

    </div>
  );
}

export default Layout;

