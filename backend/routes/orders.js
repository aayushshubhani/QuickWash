import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// GET all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

// POST to add a new order
router.post("/add", async (req, res) => {
  try {
    const { customerName, serviceType, clothCount, customerId, timeSlot, clothType } = req.body;

    // Validate required fields
    if (!customerName || !serviceType || !clothCount || !customerId || !timeSlot || !clothType) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create new order instance
    const newOrder = new Order({
      customerName,
      customerId,
      serviceType,
      clothCount,
      status: "Pending",  // Default status for new orders
      timeSlot,           // Ensure timeSlot is included
      clothType,          // Ensure clothType is included
    });

    // Save the new order to the database
    await newOrder.save();
    res.status(201).json(newOrder);  // Respond with the newly created order
  } catch (err) {
    console.error("Error adding order:", err);
    res.status(500).json({ message: "Failed to add order", error: err.message });
  }
});

// UPDATE order status
router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const orderId = req.params.id;

    const updatedOrder = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order status updated", order: updatedOrder });
  } catch (err) {
    console.error("Error updating order status:", err);
    res.status(500).json({ message: "Failed to update order status" });
  }
});

// DELETE an order by orderId
router.delete("/:id", async (req, res) => {
  try {
    const orderId = req.params.id;

    // Check if order exists
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Delete the order
    await Order.findByIdAndDelete(orderId);
    res.status(200).json({ message: "Order successfully deleted" });
  } catch (err) {
    console.error("Error deleting order:", err);
    res.status(500).json({ message: "Failed to delete order" });
  }
});

export default router;
