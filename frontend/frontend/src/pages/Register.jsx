// Register.js
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
        role
      });
      toast.success("Registration successful!");
      navigate("/login");
    } catch (err) {
      toast.error(err.response.data.message || "Registration failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-pink-600">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="backdrop-blur-md bg-white/20 p-8 rounded-2xl shadow-2xl max-w-sm w-full"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full p-3 rounded-xl bg-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 rounded-xl bg-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 rounded-xl bg-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select 
            className="w-full p-3 rounded-xl bg-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="customer">Customer</option>
            <option value="staff">Staff</option>
          </select>
          <button 
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-white">Already have an account?</p>
          <Link to="/" className="text-indigo-300 hover:underline font-medium">Login</Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;
