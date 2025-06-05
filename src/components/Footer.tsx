
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-movitec-blue rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">MT</span>
              </div>
              <span className="text-2xl font-bold">MoviTec</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming urban transportation through smart technology, 
              real-time data, and innovative payment solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-movitec-blue transition-colors cursor-pointer">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-movitec-blue transition-colors cursor-pointer">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-movitec-blue transition-colors cursor-pointer">
                <span className="text-sm">🐦</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">MoviCoins</a></li>
              <li><a href="#" className="hover:text-white transition-colors">QR Payments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Real-time Tracking</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MoviTec. All rights reserved. Built for the future of urban mobility.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
