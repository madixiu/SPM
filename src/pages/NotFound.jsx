import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();

  return ( 
    <div className="flex flex-col items-center justify-center h-screen bg-custom-gradient">
      <p className="text-6xl text-white mb-5">404</p>
      <p className="text-7xl text-white animate-pulse">Not Found</p>
      <button className="mt-20 p-4 bg-slate-700/40 shadow-md rounded-xl text-gray-100 border border-gray-500 hover:bg-slate-700 active:bg-slate-700/50"
        onClick={() => navigate('/')}
      >Back to Home</button>
    </div>
   );
}

export default NotFound;