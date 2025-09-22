import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <span className="text-muted-foreground">Rated #1 Electronics Store</span>
              </div>
              
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Latest <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">Electronics</span>
              <br />
              & Gadgets
            </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Discover cutting-edge technology and premium electronics. 
                From smartphones to smart home devices, we have everything you need.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-info text-white border-0 hover:opacity-90 transition-smooth group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:bg-secondary transition-smooth">
                View Deals
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <div className="text-center">
                <div className="font-bold text-2xl text-foreground">10K+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-foreground">500+</div>
                <div className="text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-foreground">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-info opacity-20 rounded-2xl blur-3xl"></div>
            <img 
              src={heroBanner}
              alt="Latest Electronics and Gadgets"
              className="relative rounded-2xl shadow-card w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;