import { FaRegSmileWink } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";  // Add useNavigate import
import { LogOut, ClipboardList, PackageCheck, FileText } from "lucide-react"; // Import FileText icon for reviews

function Navbar({ role, onLogout }) {
  const navigate = useNavigate();  // Initialize useNavigate hook

  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white shadow-lg">
      {/* Logo Section */}
      <div 
        className="flex items-center space-x-2 cursor-pointer" 
        onClick={() => navigate('/')}  // Use navigate instead of window.location.href
      >
        <FaRegSmileWink className="w-8 h-8 text-yellow-300 animate-pulse" />
        <h1 className="text-2xl font-bold tracking-wide">QuickWash</h1>
      </div>

      {/* Links Section */}
      <div className="flex items-center space-x-6">
        {role === "staff" && (
          <>
            <Link 
              to="/manage"
              className="flex items-center space-x-1 hover:text-yellow-300 transition duration-300"
            >
              <ClipboardList className="w-5 h-5" />
              <span>Manage Orders</span>
            </Link>
            {/* Review Complaints Link for Staff */}
            <Link 
              to="/review-complaints"
              className="flex items-center space-x-1 hover:text-yellow-300 transition duration-300"
            >
              <FileText className="w-5 h-5" />
              <span>Review Complaints</span>
            </Link>
          </>
        )}
        {role === "customer" && (
          <>
            <Link 
              to="/status"
              className="flex items-center space-x-1 hover:text-yellow-300 transition duration-300"
            >
              <PackageCheck className="w-5 h-5" />
              <span>Order Status</span>
            </Link>
            <Link 
              to="/place-order"
              className="flex items-center space-x-1 hover:text-yellow-300 transition duration-300"
            >
              <PackageCheck className="w-5 h-5" />
              <span>Place Order</span>
            </Link>
          </>
        )}
        
        {/* Logout Button */}
        {role && (
          <button 
            onClick={onLogout}
            className="flex items-center space-x-1 hover:text-yellow-300 transition duration-300 py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
