import { Users, Ticket, Bus } from "lucide-react";

const Benefits = () => {
  const userTypes = [
    {
      icon: <Users className="w-16 h-16 text-movitec-blue" />,
      title: "For Commuters",
      benefits: [
        "Save time with real-time tracking",
        "Earn rewards with MoviCoins",
        "Cashless, contactless payments",
        "Never miss your bus again"
      ],
      bgColor: "bg-blue-50",
      borderColor: "border-movitec-blue"
    },
    {
      icon: <Bus className="w-16 h-16 text-movitec-orange" />,
      title: "For Transport Companies",
      benefits: [
        "Better revenue control",
        "Improved customer relationships",
        "Digital payment integration",
        "Real-time operational data"
      ],
      bgColor: "bg-orange-50",
      borderColor: "border-movitec-orange"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MoviTec creates value for both passengers and transport operators, 
            building a better ecosystem for urban mobility.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {userTypes.map((userType, index) => (
            <div 
              key={index}
              className={`${userType.bgColor} rounded-3xl p-8 border-2 ${userType.borderColor} hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-white rounded-2xl shadow-md mb-4">
                  {userType.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {userType.title}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {userType.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
