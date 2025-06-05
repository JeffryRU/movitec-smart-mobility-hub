
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-movitec-blue to-blue-700">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para Transformar tu Viaje?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Únete a miles de viajeros inteligentes que ya están ahorrando tiempo y ganando recompensas 
            con MoviTec. Descarga la app hoy y experimenta el futuro del transporte urbano.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-movitec-orange hover:bg-orange-500 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Descargar para iOS
            </Button>
            <Button 
              size="lg" 
              className="bg-movitec-orange hover:bg-orange-500 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Descargar para Android
            </Button>
          </div>
          
          <div className="text-blue-200">
            <p className="text-lg">
              🎉 <strong>Oferta de Lanzamiento:</strong> ¡Obtén 100 MoviCoins gratis al registrarte!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
