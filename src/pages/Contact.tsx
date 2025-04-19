
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Address</h3>
                <p className="text-gray-600">123 Hydro Street, Green City, ST 12345</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-gray-600">info@greennest.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Visit Our Store</h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-6">
              {/* Map placeholder - To be implemented */}
              <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
