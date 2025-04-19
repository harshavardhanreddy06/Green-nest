
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-green-50 to-blue-50">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to Green Nest Agro
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your premier destination for hydroponic solutions and sustainable farming technology. Transform the way you grow with our cutting-edge systems.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="/products"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                >
                  Explore Products
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">The Future of Agriculture</h2>
              <p className="mt-4 text-lg text-gray-600">Discover the advantages of hydroponic farming</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Water Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Uses up to 90% less water than traditional farming methods, making it environmentally sustainable.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Higher Yields</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Produce up to 30% more yield in less space compared to conventional farming methods.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Year-Round Growing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Control your growing environment for consistent year-round harvests, independent of weather.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
              <p className="mt-4 text-lg text-gray-600">Start your hydroponic journey with our best-selling products</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                  alt="Complete Hydroponic Kit"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Complete Hydroponic Kit</h3>
                  <p className="text-gray-600">Everything you need to start your hydroponic garden, including nutrients and pH testing equipment.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
                  alt="Premium Nutrient Package"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Premium Nutrients</h3>
                  <p className="text-gray-600">Professional-grade nutrient solutions designed for optimal plant growth and maximum yields.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="LED Growing System"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">LED Growing Systems</h3>
                  <p className="text-gray-600">Energy-efficient LED lighting solutions optimized for indoor growing environments.</p>
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
