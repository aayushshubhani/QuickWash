import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function ManageOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleUpdateStatus = async (orderId, status) => {
    try {
      await axios.put(`http://localhost:5000/api/orders/${orderId}`, { status });
      toast.success("Order status updated!");
      setOrders(orders.map(order => order._id === orderId ? { ...order, status } : order));
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-md bg-white/20 p-8 rounded-2xl shadow-2xl max-w-4xl w-full"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">Manage Orders</h2>
        {loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order._id} className="flex justify-between items-center p-4 rounded-xl bg-white/40 mb-3 shadow-lg">
                <div>
                  <p className="text-white">Customer: {order.customerName}</p>
                  <p className="text-white">Service: {order.serviceType}</p>
                  <p className="text-white">Clothes: {order.clothCount}</p>
                </div>
                <div>
                  <select
                    className="p-2 rounded-xl bg-white/60 focus:outline-none"
                    value={order.status}
                    onChange={(e) => handleUpdateStatus(order._id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default ManageOrders;
