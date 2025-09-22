import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/contexts/CartContext';
import smartphoneImg from '@/assets/smartphone.jpg';
import earbudsImg from '@/assets/wireless-earbuds.jpg';
import smartwatchImg from '@/assets/smartwatch.jpg';
import laptopImg from '@/assets/gaming-laptop.jpg';
import speakerImg from '@/assets/bluetooth-speaker.jpg';

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Premium Smartphone Pro Max",
    price: 79999,
    image: smartphoneImg,
    category: "Smartphones",
    rating: 5,
    reviews: 1247
  },
  {
    id: 2,
    name: "Wireless Earbuds Pro",
    price: 15999,
    image: earbudsImg,
    category: "Audio",
    rating: 4,
    reviews: 892
  },
  {
    id: 3,
    name: "Smart Watch Series X",
    price: 32999,
    image: smartwatchImg,
    category: "Wearables",
    rating: 5,
    reviews: 654
  },
  {
    id: 4,
    name: "Gaming Laptop Ultra",
    price: 129999,
    image: laptopImg,
    category: "Computers",
    rating: 5,
    reviews: 432
  },
  {
    id: 5,
    name: "Bluetooth Speaker Premium",
    price: 12999,
    image: speakerImg,
    category: "Audio",
    rating: 4,
    reviews: 289
  },
  {
    id: 6,
    name: "Premium Smartphone Standard",
    price: 55999,
    image: smartphoneImg,
    category: "Smartphones",
    rating: 4,
    reviews: 1056
  }
];

const ProductGrid: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of the latest and greatest electronics, 
            carefully curated for tech enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sampleProducts.map((product, index) => (
            <div 
              key={product.id} 
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-slide-up"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;