
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Hydroponic System Design",
      description: "Custom-designed hydroponic systems tailored to your specific needs. Our expert team will create the perfect setup for your space and growing goals.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    },
    {
      title: "Consultation Services",
      description: "Professional guidance on hydroponic farming techniques, plant nutrition, and system maintenance. Get expert advice for optimal results.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
    },
    {
      title: "Installation Support",
      description: "Professional installation of hydroponic systems, including setup, testing, and initial system calibration.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Maintenance Programs",
      description: "Regular maintenance services to ensure your hydroponic system operates at peak efficiency. Includes system cleaning, calibration, and optimization.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      title: "Training Workshops",
      description: "Comprehensive training programs covering hydroponic farming techniques, system maintenance, and crop management.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
    },
    {
      title: "System Automation",
      description: "Smart automation solutions for monitoring and controlling your hydroponic system, including nutrient dosing and climate control.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive hydroponic solutions tailored to your needs, from system design to ongoing support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-600">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Our team of certified professionals brings years of experience in hydroponic farming.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Customized Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Tailored services to meet your specific needs and growing objectives.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Dedicated support team available to help you achieve the best results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
