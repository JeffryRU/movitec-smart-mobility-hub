
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-movitec-blue to-blue-700">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Commute?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of smart commuters who are already saving time and earning rewards 
            with MoviTec. Download the app today and experience the future of urban transportation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-movitec-orange hover:bg-orange-500 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Download for iOS
            </Button>
            <Button 
              size="lg" 
              className="bg-movitec-orange hover:bg-orange-500 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Download for Android
            </Button>
          </div>
          
          <div className="text-blue-200">
            <p className="text-lg">
              🎉 <strong>Launch Special:</strong> Get 100 free MoviCoins when you sign up!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
