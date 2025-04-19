
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Green Nest Agro</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the revolution in sustainable agriculture through innovative hydroponic solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Our Facility"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, Green Nest Agro Pet Ltd. emerged from a vision to revolutionize agriculture through sustainable hydroponic solutions. Our journey began with a simple goal: to make efficient farming accessible to everyone.
            </p>
            <p className="text-gray-600 mb-4">
              Today, we're proud to be at the forefront of hydroponic innovation, serving thousands of customers worldwide with state-of-the-art growing solutions and expert guidance.
            </p>
            <p className="text-gray-600">
              Our team of agricultural experts and technology specialists works tirelessly to develop and provide the most effective hydroponic systems and solutions for both commercial and hobby growers.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  We're committed to promoting sustainable farming practices that conserve water and reduce environmental impact.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Continuously developing new solutions to make hydroponic farming more efficient and accessible.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  Ensuring the highest standards in all our products and services to deliver the best results for our customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5000+</div>
              <div className="text-gray-600">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Staff</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
