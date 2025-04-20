import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function StatusPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const customerId = "your-customer-id-here"; // Replace this with the actual customer ID

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/orders");
        setOrders(res.data);
        setLoading(false);
      } catch (err) {
        toast.error("Failed to fetch orders");
      }
    };
    fetchOrders();
  }, []);

  const deleteOrder = async (orderId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/orders/${orderId}`, {
        data: { customerId },  // Send the customerId to verify the order belongs to the customer
      });

      if (response.status === 200) {
        toast.success("Order deleted successfully!");
        setOrders(orders.filter((order) => order._id !== orderId)); // Remove the order from the UI
      }
    } catch (err) {
      toast.error("Failed to delete order");
      console.error("Error:", err.response ? err.response.data : err);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-400">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-2xl max-w-4xl w-full"
      >
        <h2 className="text-3xl font-bold text-gray-300 text-center mb-6">Order Status</h2>
        {loading ? (
          <p className="text-gray-300 text-center">Loading...</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order._id}
                className="flex justify-between items-center p-4 rounded-xl bg-white/30 mb-3 shadow-md"
              >
                <div>
                  <p className="text-gray-300 font-medium">Customer: {order.customerName}</p>
                  <p className="text-gray-300">Service: {order.serviceType}</p>
                  <p className="text-gray-300">Clothes: {order.clothCount}</p>
                </div>
                <div>
                  <p className="text-gray-300 font-semibold">Status: {order.status}</p>
                  <button
                    onClick={() => deleteOrder(order._id)}
                    className="ml-4 py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default StatusPage;
