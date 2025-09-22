import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-info rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold">ElectroShop</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted destination for the latest electronics and gadgets. 
              Quality products, competitive prices, and exceptional service.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">FAQs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Shipping Info</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Returns</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Smartphones</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Laptops</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Audio</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Wearables</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Accessories</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for the latest deals and tech news.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email"
                className="bg-background border-border"
              />
              <Button className="w-full bg-gradient-to-r from-primary to-info text-white border-0 hover:opacity-90 transition-smooth">
                Subscribe
              </Button>
            </div>
            
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3" />
                <span>support@electroshop.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-3 w-3" />
                <span>123 Tech Street, Digital City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; 2024 ElectroShop. MIT Licensed.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-smooth">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;