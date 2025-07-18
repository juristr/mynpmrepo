import React from 'react';
import { Card, Button } from '@packages/ui';
import type { Product } from '../index';

export interface ProductListProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
          {products.map((product) => (
            <Card 
              key={product.id} 
              title={product.name}
              footer={
                onAddToCart && (
                  <Button 
                    label="Add to Cart" 
                    onClick={() => onAddToCart(product)}
                    disabled={product.stock === 0}
                  />
                )
              }
            >
              <p>{product.description}</p>
              <p>Price: <strong>${product.price.toFixed(2)}</strong></p>
              <p>Stock: {product.stock > 0 ? product.stock : 'Out of stock'}</p>
              <p>Category: {product.category}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};