
import { Button } from "@/components/ui/button";
import { Map, Bus } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-movitec-blue via-blue-600 to-movitec-celeste overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Map className="w-16 h-16 md:w-20 md:h-20 text-white animate-float" />
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              El Futuro de la 
              <span className="block bg-gradient-to-r from-movitec-orange to-yellow-300 bg-clip-text text-transparent">
                Movilidad Inteligente
              </span>
            </h1>
            <Bus className="w-16 h-16 md:w-20 md:h-20 text-movitec-orange animate-float" style={{ animationDelay: '1s' }} />
          </div>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Transforma tu viaje diario con seguimiento de autobuses en tiempo real, 
            pagos digitales y nuestro exclusivo sistema de fidelización MoviCoins.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-movitec-orange hover:bg-orange-500 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Descargar MoviTec
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-movitec-blue font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              Ver Demo
            </Button>
          </div>
        </div>
        
        {/* App mockup placeholder */}
        <div className="mt-16 animate-slide-in-right">
          <div className="relative mx-auto w-80 h-96 bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-2 shadow-2xl">
            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
              <div className="text-center text-movitec-blue">
                <div className="w-16 h-16 bg-movitec-blue rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MT</span>
                </div>
                <p className="font-semibold text-movitec-blue">App MoviTec</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
