import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useCart, Product } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="group bg-gradient-to-b from-card to-secondary/50 border-border hover:shadow-hover transition-smooth cursor-pointer animate-slide-up">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
          />
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-smooth">
            <Button variant="secondary" size="sm" className="rounded-full h-8 w-8 p-0 shadow-card">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          {product.category && (
            <div className="absolute top-3 left-3">
              <span className="bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full">
                {product.category}
              </span>
            </div>
          )}
        </div>
        
        <div className="p-4 space-y-3">
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth truncate">
              {product.name}
            </h3>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`h-3 w-3 ${
                      star <= product.rating 
                        ? 'fill-warning text-warning' 
                        : 'text-muted-foreground'
                    }`} 
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">({product.reviews})</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-foreground">
                ₹{product.price.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-primary to-info text-white border-0 hover:opacity-90 transition-smooth group/btn"
        >
          <ShoppingCart className="mr-2 h-4 w-4 group-hover/btn:animate-cart-bounce" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;