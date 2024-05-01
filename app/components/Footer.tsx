// components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-3">
          <div className="flex justify-between items-center">
            <div>
              <p>&copy; 2024 News Website. All rights reserved.</p>
              <p>Designed and developed by Umer Sufian</p>
            </div>
            <div>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-white hover:text-gray-400">Terms of Service</a></li>
                <li><a href="#" className="text-white hover:text-gray-400">Privacy Policy</a></li>
                <li><a href="#" className="text-white hover:text-gray-400">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  