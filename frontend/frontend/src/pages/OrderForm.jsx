import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function OrderForm() {
  const [customerName, setCustomerName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [clothCount, setClothCount] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/orders/add", {
        customerName,
        customerId,
        serviceType,
        clothCount,
      });
      toast.success("Order placed successfully!");
      // Reset the form
      setCustomerName("");
      setCustomerId("");
      setServiceType("");
      setClothCount(1);
    } catch (err) {
      toast.error(err.response.data.message || "Error placing order");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-md bg-white/30 p-8 rounded-2xl shadow-2xl max-w-sm w-full"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">Place Order</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Customer Name"
            className="w-full p-3 rounded-xl bg-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Customer ID"
            className="w-full p-3 rounded-xl bg-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            required
          />
          <select
            className="w-full p-3 rounded-xl bg-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
          >
            <option value="">Select Service Type</option>
            <option value="Laundry">Laundry</option>
            <option value="Dry Cleaning">Dry Cleaning</option>
          </select>
          <input
            type="number"
            placeholder="Number of Clothes"
            className="w-full p-3 rounded-xl bg-white/60 focus:outline-none focus:ring-2 focus:ring-teal-300"
            value={clothCount}
            onChange={(e) => setClothCount(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold shadow-lg transition"
          >
            Submit Order
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default OrderForm;
