
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const Products = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Basic Hydroponic Kit",
      price: 199.99,
      description: "Perfect starter kit for home hydroponic gardening",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    },
    {
      id: 2,
      name: "Advanced Nutrient Solution",
      price: 49.99,
      description: "Professional-grade nutrient solution for optimal growth",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
    },
    {
      id: 3,
      name: "LED Grow Light System",
      price: 299.99,
      description: "Energy-efficient LED lighting for indoor growing",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    }
  ];

  const addToCart = (product: Product) => {
    // To be implemented with cart functionality
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
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button 
                    onClick={() => addToCart(product)}
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
