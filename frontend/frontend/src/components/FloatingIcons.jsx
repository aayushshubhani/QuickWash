import { useState } from "react";
import { FaRegCommentDots, FaRegEdit, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingIcons = ({ onComplaintSubmit }) => {
  const [showComplaint, setShowComplaint] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [complaintText, setComplaintText] = useState("");
  const [customerName, setCustomerName] = useState("");

  const handleComplaintSubmit = () => {
    if (complaintText.trim() && customerName.trim()) {
      onComplaintSubmit({
        id: Date.now(),
        customerName: customerName,
        complaint: complaintText,
        status: "Pending",
      });
      setComplaintText(""); // Clear complaint text
      setCustomerName("");  // Clear customer name
      setShowComplaint(false); // Close the complaint popup
    }
  };

  return (
    <div className="z-50">
      {/* Complaint Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        className="fixed bottom-6 left-6"
      >
        <button
          onClick={() => setShowComplaint(true)}
          className="bg-red-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-red-600 transition"
          title="Register a Complaint"
        >
          <FaRegEdit size={22} />
        </button>
      </motion.div>

      {/* Chat Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.4 }}
        className="fixed bottom-6 right-6"
      >
        <button
          onClick={() => setShowChat(true)}
          className="bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
          title="Chat with Customer Care"
        >
          <FaRegCommentDots size={22} />
        </button>
      </motion.div>

      {/* Complaint Popup */}
      <AnimatePresence>
        {showComplaint && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: -50, y: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0, x: 50, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed bottom-24 left-6 bg-white p-6 rounded-xl shadow-xl w-72 z-50"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Register Complaint</h3>
              <button
                onClick={() => setShowComplaint(false)}
                className="text-gray-500 hover:text-red-500"
              >
                <FaTimes />
              </button>
            </div>

            {/* Customer Name input */}
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Your name..."
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />

            {/* Complaint Textarea */}
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
              rows="3"
              placeholder="Describe your issue..."
              value={complaintText}
              onChange={(e) => setComplaintText(e.target.value)}
            />

            <button
              onClick={handleComplaintSubmit}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition w-full"
            >
              Submit
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Popup */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 50, y: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0, x: -50, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed bottom-24 right-6 bg-white p-6 rounded-xl shadow-xl w-72 z-50"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-800">Chat with Us</h3>
              <button
                onClick={() => setShowChat(false)}
                className="text-gray-500 hover:text-blue-500"
              >
                <FaTimes />
              </button>
            </div>
            <div className="text-gray-600 mb-4">Hello! How can we assist you today?</div>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your message..."
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition w-full">
              Send
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingIcons;
