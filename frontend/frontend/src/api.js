import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const createOrder = (order) => API.post("/orders", order);
export const getOrders = () => API.get("/orders");
export const updateOrderStatus = (id, status) => API.put(`/orders/${id}`, { status });
