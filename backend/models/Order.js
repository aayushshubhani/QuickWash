import mongoose from "mongoose";

// Order Schema
const orderSchema = new mongoose.Schema({
  customerId: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  clothCount: {
    type: Number,
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,  // Ensure timeSlot is required
  },
  clothType: {
    type: String,
    required: true,  // Ensure clothType is required
  },
  status: {
    type: String,
    default: "Pending", // Default status when order is created
  },
});

// Export the model with default export
const Order = mongoose.model("Order", orderSchema);
export default Order;
