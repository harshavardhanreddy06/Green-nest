
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useCart } from "@/hooks/useCart";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const Products = () => {
  const { addToCart } = useCart();
  
  const products: Product[] = [
    {
      id: 1,
      name: "Basic Hydroponic Kit",
      price: 199.99,
      description: "Perfect starter kit for home hydroponic gardening. Includes growing trays, nutrient solution, and pH testing kit.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    },
    {
      id: 2,
      name: "Advanced Nutrient Solution",
      price: 49.99,
      description: "Professional-grade nutrient solution for optimal plant growth. Rich in essential minerals and vitamins.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
    },
    {
      id: 3,
      name: "LED Grow Light System",
      price: 299.99,
      description: "Energy-efficient LED lighting system perfect for indoor growing. Adjustable spectrum for different growth stages.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    },
    {
      id: 4,
      name: "Vertical Hydroponic Tower",
      price: 449.99,
      description: "Space-saving vertical hydroponic system. Perfect for growing leafy greens and herbs in limited spaces.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    },
    {
      id: 5,
      name: "pH Control Kit",
      price: 79.99,
      description: "Complete pH testing and adjustment kit. Includes digital pH meter and adjustment solutions.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
    },
    {
      id: 6,
      name: "Smart Hydroponic Controller",
      price: 599.99,
      description: "Automated control system for monitoring and adjusting nutrient levels, pH, and temperature.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    }
  ];

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-center mb-12">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
