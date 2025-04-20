import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm mb-4">&copy; 2025 QuickWash. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-yellow-300" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-yellow-300" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-yellow-300" />
          </a>
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl hover:text-yellow-300" />
          </a>
        </div>
        <p className="text-sm">Customer Care: 1-800-123-4567</p>
      </div>
    </footer>
  );
}

export default Footer;
