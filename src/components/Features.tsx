
import { Bus, MapPin, QrCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Bus className="w-12 h-12 text-movitec-blue" />,
      title: "Real-Time Bus Tracking",
      description: "Know exactly when your bus will arrive with live GPS tracking and accurate predictions.",
      color: "from-movitec-blue to-blue-600"
    },
    {
      icon: <QrCode className="w-12 h-12 text-movitec-orange" />,
      title: "QR Code Payments",
      description: "Pay instantly with secure QR code scanning. No more cash, no more cards, just convenience.",
      color: "from-movitec-orange to-orange-500"
    },
    {
      icon: <MapPin className="w-12 h-12 text-movitec-celeste" />,
      title: "MoviCoins Loyalty",
      description: "Earn MoviCoins with every trip and unlock exclusive rewards and discounts.",
      color: "from-cyan-400 to-movitec-celeste"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose MoviTec?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the next generation of urban transportation with features designed 
            for modern commuters.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${feature.color} mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
