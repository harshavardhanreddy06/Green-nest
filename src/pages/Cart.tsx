
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { items, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
            <Button 
              onClick={() => window.location.href = '/products'}
              className="bg-green-600 hover:bg-green-700"
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <select
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="border rounded p-1"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
