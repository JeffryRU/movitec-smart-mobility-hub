
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
              <span className="text-2xl font-bold text-white">MoviTec</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformando el transporte urbano a través de tecnología inteligente, 
              datos en tiempo real y soluciones de pago innovadoras.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-movitec-blue transition-colors cursor-pointer">
                <span className="text-sm text-white">📱</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-movitec-blue transition-colors cursor-pointer">
                <span className="text-sm text-white">📧</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-movitec-blue transition-colors cursor-pointer">
                <span className="text-sm text-white">🐦</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Producto</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Características</a></li>
              <li><a href="#" className="hover:text-white transition-colors">MoviCoins</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pagos QR</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seguimiento en Tiempo Real</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Acerca de Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Socios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MoviTec. Todos los derechos reservados. Construido para el futuro de la movilidad urbana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
