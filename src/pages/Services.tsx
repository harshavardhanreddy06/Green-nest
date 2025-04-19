
import Layout from "@/components/layout/Layout";

const Services = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Hydroponic System Design",
              description: "Custom hydroponic system design and setup for commercial and residential use"
            },
            {
              title: "Consultation Services",
              description: "Expert guidance on hydroponic farming techniques and best practices"
            },
            {
              title: "Equipment Installation",
              description: "Professional installation of hydroponic systems and equipment"
            },
            {
              title: "Maintenance Support",
              description: "Regular maintenance and technical support for your hydroponic systems"
            },
            {
              title: "Training Programs",
              description: "Comprehensive training on hydroponic farming techniques"
            },
            {
              title: "System Automation",
              description: "Smart automation solutions for hydroponic farming systems"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-green-600">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
