
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useCart } from "@/hooks/useCart";
import { Facebook, Instagram, Twitter } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const Products = () => {
  const { addToCart } = useCart();
  
  const products: Product[] = [
    // Hydroponic Systems
    {
      id: 1,
      name: "Advanced Hydroponic Growing System",
      price: 299.99,
      description: "Complete hydroponic system with 12 plant sites, LED grow lights, and automated nutrient delivery. Perfect for vegetables and herbs.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      category: "Systems"
    },
    // Seeds
    {
      id: 2,
      name: "Premium Lettuce Seed Pack",
      price: 12.99,
      description: "High-yield hydroponic lettuce seeds. Contains 500 seeds of Butterhead, Romaine, and Leaf varieties.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      category: "Seeds"
    },
    // Nutrients
    {
      id: 3,
      name: "Professional Nutrient Kit",
      price: 79.99,
      description: "Complete nutrient solution for all growth stages. Includes macro and micronutrients, pH balancers, and measuring tools.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      category: "Nutrients"
    },
    // Equipment
    {
      id: 4,
      name: "High-Pressure Water Pump",
      price: 149.99,
      description: "Energy-efficient water pump for hydroponic systems. Features adjustable flow rate and quiet operation.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      category: "Equipment"
    },
    // Pots
    {
      id: 5,
      name: "Mesh Net Pot Set",
      price: 24.99,
      description: "Set of 20 heavy-duty mesh pots. Perfect for hydroponics and aquaponics. Multiple sizes included.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Containers"
    },
    // Organic Products
    {
      id: 6,
      name: "Organic Plant Growth Booster",
      price: 34.99,
      description: "100% organic growth stimulator. Enhances root development and overall plant health.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      category: "Organic"
    },
    // More Systems
    {
      id: 7,
      name: "Vertical Hydroponic Tower",
      price: 399.99,
      description: "Space-saving vertical system with 24 plant sites. Ideal for small spaces and urban farming.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      category: "Systems"
    },
    // More Seeds
    {
      id: 8,
      name: "Herb Seed Collection",
      price: 19.99,
      description: "Premium herb seed collection including basil, cilantro, parsley, and mint. Perfect for hydroponic herb gardens.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      category: "Seeds"
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
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover our comprehensive range of hydroponic equipment, nutrients, and supplies. 
          Whether you're a beginner or professional grower, we have everything you need for successful hydroponic cultivation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-green-600 font-medium">{product.category}</span>
                </div>
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
