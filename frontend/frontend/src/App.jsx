import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ManageOrders from "./pages/ManageOrders";
import PlaceOrder from "./pages/PlaceOrder";
import StatusPage from "./pages/StatusPage";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import WelcomePage from "./pages/WelcomePage";
import { ToastContainer } from "react-toastify";
import { FaRegCommentDots, FaRegEdit, FaTimes } from "react-icons/fa";
import ReviewComplaints from "./pages/ReviewComplaints"; // Import the new ReviewComplaints page

function App() {
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // State to handle the complaints
  const [complaints, setComplaints] = useState([]);
  const [showComplaintPopup, setShowComplaintPopup] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(false);
  const [complaintText, setComplaintText] = useState("");
  const [customerName, setCustomerName] = useState(""); // <-- added

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      setRole(decodedToken.role);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setRole(null);
    setIsAuthenticated(false);
  };

  const handleComplaintSubmit = () => {
    if (complaintText.trim() && customerName.trim()) {
      const newComplaint = {
        id: Date.now(),
        customerName: customerName, // use actual entered name
        complaint: complaintText,
        status: "Pending",
      };
      setComplaints((prevComplaints) => [...prevComplaints, newComplaint]);
      setComplaintText("");
      setCustomerName(""); // clear customer name after submit
      setShowComplaintPopup(false);
    }
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar role={role} onLogout={handleLogout} />
        <div className="flex-grow">
          <Routes>
            {!isAuthenticated ? (
              <Route path="/" element={<WelcomePage />} />
            ) : (
              <Route path="/" element={<Home />} />
            )}
            <Route path="/login" element={<Login setRole={setRole} />} />
            <Route path="/register" element={<Register />} />
            {role === "staff" && <Route path="/manage" element={<ManageOrders />} />}
            {role === "staff" && (
              <Route
                path="/review-complaints"
                element={<ReviewComplaints complaints={complaints} />}
              />
            )}
            {role === "customer" && <Route path="/place-order" element={<PlaceOrder />} />}
            {role === "customer" && <Route path="/status" element={<StatusPage />} />}
            <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/"} />} />
          </Routes>
        </div>
        <Footer />
      </div>

      {/* Floating Icons for Customers */}
      {role === "customer" && isAuthenticated && (
        <>
          {/* Complaint Icon */}
          <div title="Register a Complaint" className="fixed bottom-6 left-6 z-50">
            <button
              onClick={() => setShowComplaintPopup(true)}
              className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-red-600 transition"
            >
              <FaRegEdit size={20} />
            </button>
          </div>

          {/* Chat Icon */}
          <div title="Chat with Customer Care" className="fixed bottom-6 right-6 z-50">
            <button
              onClick={() => setShowChatPopup(true)}
              className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
            >
              <FaRegCommentDots size={20} />
            </button>
          </div>

          {/* Complaint Popup */}
          {showComplaintPopup && (
            <div className="fixed bottom-24 left-6 w-72 bg-white rounded-xl shadow-lg p-4 z-50 animate-fade-in">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold">Register Complaint</h3>
                <button
                  onClick={() => setShowComplaintPopup(false)}
                  className="text-gray-500 hover:text-red-600"
                >
                  <FaTimes />
                </button>
              </div>

              {/* New Customer Name input */}
              <input
                type="text"
                placeholder="Your name..."
                className="w-full border rounded p-2 text-sm mb-3"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />

              <textarea
                placeholder="Describe your issue..."
                className="w-full border rounded p-2 text-sm mb-3"
                rows={3}
                value={complaintText}
                onChange={(e) => setComplaintText(e.target.value)}
              />
              <button
                onClick={handleComplaintSubmit}
                className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600 transition"
              >
                Submit
              </button>
            </div>
          )}

          {/* Chat Popup */}
          {showChatPopup && (
            <div className="fixed bottom-24 right-6 w-72 bg-white rounded-xl shadow-lg p-4 z-50 animate-fade-in">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold">Chat Support</h3>
                <button
                  onClick={() => setShowChatPopup(false)}
                  className="text-gray-500 hover:text-red-600"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="border rounded p-2 h-32 overflow-y-auto text-sm mb-3">
                <p className="text-gray-500">Hi! How can we assist you?</p>
              </div>
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full border rounded p-2 text-sm"
              />
            </div>
          )}
        </>
      )}

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
