
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">My Profile</h1>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <p className="mt-1">John Doe</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <p className="mt-1">john.doe@example.com</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <p className="mt-1">+1 234 567 890</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Address</label>
                    <p className="mt-1">123 Street, City, Country</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Order History</h3>
                <p className="text-gray-600">No orders yet</p>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
