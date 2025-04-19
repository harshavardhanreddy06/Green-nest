import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      title: "Modern Hydroponics Solutions"
    },
    {
      url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      title: "Sustainable Growing"
    },
    {
      url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      title: "Advanced Growing Technology"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-green-50 to-blue-50">
        {/* Hero Carousel Section */}
        <div className="relative">
          <Carousel className="w-full max-w-7xl mx-auto">
            <CarouselContent>
              {heroImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[600px]">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <h2 className="text-4xl font-bold text-white">{image.title}</h2>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Introduction Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What is Hydroponics?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Hydroponics is a revolutionary method of growing plants without soil, using mineral nutrient solutions in water. 
              This innovative technique offers numerous advantages over traditional farming methods, including water conservation, 
              higher yields, and year-round growing capabilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Space Efficient</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Grow more in less space with vertical farming techniques and optimized growing conditions.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Resource Conservation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Use up to 90% less water than traditional farming while delivering optimal nutrients to plants.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quality Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Maintain complete control over growing conditions for consistent, high-quality produce.</p>
                </CardContent>
              </Card>
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
