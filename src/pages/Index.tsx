
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to Green Nest Agro
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your premier destination for hydroponic solutions and sustainable farming technology.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="/products"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Hydroponics?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-green-600 text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-2">90% Less Water</h3>
                <p className="text-gray-600">Hydroponics uses up to 90% less water than traditional farming methods.</p>
              </div>
              <div className="text-center p-6">
                <div className="text-green-600 text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-semibold mb-2">Space Efficient</h3>
                <p className="text-gray-600">Grow more in less space with vertical farming solutions.</p>
              </div>
              <div className="text-center p-6">
                <div className="text-green-600 text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-semibold mb-2">Year-Round Growing</h3>
                <p className="text-gray-600">Control your growing environment for consistent year-round yields.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                  alt="Hydroponic System"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Basic Hydroponic Kit</h3>
                  <p className="text-gray-600">Perfect for beginners starting their hydroponic journey.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
                  alt="Nutrient Solution"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Premium Nutrients</h3>
                  <p className="text-gray-600">Professional-grade nutrients for optimal plant growth.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
                  alt="LED Grow Lights"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">LED Grow Lights</h3>
                  <p className="text-gray-600">Energy-efficient lighting solutions for indoor growing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
