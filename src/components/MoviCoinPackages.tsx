
import { Ticket, GraduationCap, Crown, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MoviCoinPackages = () => {
  const packages = [
    {
      icon: <GraduationCap className="w-12 h-12 text-white" />,
      title: "Paquete Estudiante",
      price: "50% OFF",
      movicoins: "500 MoviCoins",
      benefits: [
        "Verificación de ID estudiantil",
        "Descuentos exclusivos en viajes",
        "Viajes gratis los fines de semana",
        "Soporte prioritario"
      ],
      bgGradient: "from-movitec-blue to-blue-600",
      borderColor: "border-movitec-blue",
      popular: false
    },
    {
      icon: <Crown className="w-12 h-12 text-white" />,
      title: "Paquete Pro",
      price: "1,000",
      movicoins: "1,200 MoviCoins",
      benefits: [
        "12% de descuento en todos los viajes",
        "Acceso a rutas premium",
        "Transferencias ilimitadas",
        "Recompensas VIP exclusivas"
      ],
      bgGradient: "from-movitec-orange to-orange-500",
      borderColor: "border-movitec-orange",
      popular: true
    },
    {
      icon: <Zap className="w-12 h-12 text-white" />,
      title: "Paquete Express",
      price: "300",
      movicoins: "350 MoviCoins",
      benefits: [
        "Ideal para uso ocasional",
        "5% de descuento en viajes",
        "Válido por 3 meses",
        "Sin compromisos mensuales"
      ],
      bgGradient: "from-cyan-400 to-movitec-celeste",
      borderColor: "border-movitec-celeste",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Viaja más, paga menos: descubre los Paquetes MoviCoin
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative border-2 ${pkg.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${pkg.popular ? 'scale-105' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-movitec-orange text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ¡Más Popular!
                  </span>
                </div>
              )}
              
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${pkg.bgGradient} mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {pkg.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {pkg.title}
                </h3>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-movitec-blue mb-2">
                    {pkg.price}
                    {pkg.title !== "Paquete Estudiante" && (
                      <span className="text-lg text-gray-500 ml-1">MoviCoins</span>
                    )}
                  </div>
                  <div className="text-movitec-orange font-semibold">
                    Recibes: {pkg.movicoins}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm font-medium text-center">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${pkg.bgGradient} hover:opacity-90 text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105`}
                >
                  <Ticket className="w-4 h-4 mr-2" />
                  Obtener Paquete
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white rounded-2xl shadow-lg p-6 border border-movitec-celeste">
            <div className="w-12 h-12 bg-gradient-to-r from-movitec-orange to-yellow-400 rounded-full flex items-center justify-center mr-4">
              <span className="text-white font-bold text-xl">🎉</span>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">
                ¡Oferta Especial de Lanzamiento!
              </p>
              <p className="text-gray-600">
                Obtén <strong className="text-movitec-orange">100 MoviCoins gratis</strong> al registrarte hoy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviCoinPackages;
