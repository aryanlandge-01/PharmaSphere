

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
    <div className="mx-24 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h4 className="text-2xl font-bold mb-2">MedConnect</h4>
        <p className="mb-2">Your Trusted Online Pharmacy</p>
        <p>&copy; {new Date().getFullYear()} MedConnect. All rights reserved.</p>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-2">Quick Links</h4>
        <ul>
          <li className="mb-1"><a href="#about" className="hover:underline text-white">About Us</a></li>
          <li className="mb-1"><a href="#services" className="hover:underline text-white">Services</a></li>
          <li className="mb-1"><a href="#products" className="hover:underline text-white">Products</a></li>
          <li className="mb-1"><a href="#contact" className="hover:underline text-white">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </footer>
  

  );
};

export default Footer;



