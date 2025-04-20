import React, { useState } from "react";
import axios from "axios";

const PlaceOrder = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [clothType, setClothType] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [serviceType, setServiceType] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!customerName || !customerId || !clothType || !quantity || !serviceType || !timeSlot) {
      setError("All fields are required.");
      return;
    }

    const orderData = {
      customerName,
      customerId,
      clothType,
      quantity,
      serviceType,
      timeSlot,
      clothCount: quantity,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/orders/add", orderData);

      if (response.status === 201) {
        setSuccess(true);
        setError("");
        // Optionally reset form
        setCustomerName("");
        setCustomerId("");
        setClothType("");
        setQuantity(1);
        setServiceType("");
        setTimeSlot("");
      }
    } catch (err) {
      setError("Failed to place order. Please try again.");
      console.error("Error:", err.response ? err.response.data : err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-600">
      <div className="backdrop-blur-lg bg-white/30 max-w-md w-full p-8 rounded-3xl shadow-2xl space-y-6">
        <h2 className="text-3xl font-semibold text-gray-200 text-center mb-6">Place Your Order</h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {success && <div className="text-green-500 text-center mb-4">Order placed successfully!</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-200">Customer Name</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="mt-2 p-4 w-full rounded-lg border-2 focus:ring-2"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Customer ID</label>
            <input
              type="text"
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
              className="mt-2 p-4 w-full rounded-lg border-2 focus:ring-2"
              placeholder="Enter your customer ID"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Cloth Type</label>
            <input
              type="text"
              value={clothType}
              onChange={(e) => setClothType(e.target.value)}
              className="mt-2 p-4 w-full rounded-lg border-2 focus:ring-2"
              placeholder="e.g., Shirt, Pants"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-2 p-4 w-full rounded-lg border-2 focus:ring-2"
              min="1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200">Service Type</label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="mt-2 p-4 w-full rounded-lg border-2 bg-gray-200 text-gray-700 focus:ring-2"
            >
              <option value="">Select Service Type</option>
              <option value="Laundry">Laundry</option>
              <option value="Dry Clean">Dry Clean</option>
            </select>
          </div>

          {/* Timeslot Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-200">Choose Time Slot</label>
            <select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="mt-2 p-4 w-full rounded-lg border-2 bg-gray-200 text-gray-700 focus:ring-2"
            >
              <option value="">Select Time Slot</option>
              <option value="9:00 AM - 11:00 AM">9:00 AM - 11:00 AM</option>
              <option value="11:00 AM - 1:00 PM">11:00 AM - 1:00 PM</option>
              <option value="1:00 PM - 3:00 PM">1:00 PM - 3:00 PM</option>
              <option value="3:00 PM - 5:00 PM">3:00 PM - 5:00 PM</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
