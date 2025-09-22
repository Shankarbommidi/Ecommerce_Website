import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import ShoppingCart from '@/components/ShoppingCart';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ShoppingCart />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
