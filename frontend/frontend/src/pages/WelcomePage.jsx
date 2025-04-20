import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegSmileWink } from "react-icons/fa";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.caldwellandgregory.com/wp-content/uploads/2021/10/home-banner-image-left.jpg')",
          filter: "blur(6px) brightness(0.7)",
          transform: "scale(1.05)",
        }}
      ></div>

      {/* Decorative Glowing Circles */}
      <div className="absolute w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-25 top-10 left-10 animate-ping"></div>
      <div className="absolute w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-25 bottom-0 right-0 animate-pulse"></div>

      {/* Main Login/Register Card */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="backdrop-blur-lg bg-white/30 border border-white/50 p-10 rounded-3xl shadow-2xl shadow-black/30 max-w-3xl w-full flex flex-col items-center text-center"
      >
        <div className="mb-6">
          <FaRegSmileWink className="w-14 h-14 text-yellow-300 animate-bounce" />
        </div>
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-4 tracking-wide">
          QuickWash
        </h1>
        <p className="text-white/90 mb-6 text-lg leading-relaxed drop-shadow">
          Fast, fresh, and hassle-free laundry service. Keep your clothes clean and your day bright!
        </p>

        <div className="space-y-4 w-full">
          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition"
          >
            Login
          </button>
          <button
            onClick={handleRegister}
            className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg transition"
          >
            Register
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomePage;
