import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Ensure Link is imported here
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

function Login({ setRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token); // Store the JWT token
      setRole(res.data.user.role); // Update role
      toast.success("Login successful!");
      navigate("/"); // Redirect to homepage or dashboard
    } catch (err) {
      toast.error(err.response.data.message || "Login failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="backdrop-blur-md bg-white/20 p-8 rounded-2xl shadow-2xl max-w-sm w-full"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 rounded-xl bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            type="submit"
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-white">Don't have an account?</p>
          <Link to="/register" className="text-blue-300 hover:underline font-medium">Register</Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
