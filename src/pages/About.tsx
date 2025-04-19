
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-center mb-8">About Green Nest Agro</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Green Nest Agro Pet Ltd., we're dedicated to revolutionizing agriculture through innovative hydroponic solutions. Our mission is to provide sustainable farming technologies that optimize resource usage and maximize crop yields.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision a future where sustainable agriculture is accessible to everyone. Through our cutting-edge hydroponic systems, we aim to contribute to food security and environmental sustainability.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-2">•</span>
                <span>Expert guidance and support</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-2">•</span>
                <span>Premium quality hydroponic equipment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-2">•</span>
                <span>Sustainable farming solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-semibold mr-2">•</span>
                <span>Innovative technology integration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
