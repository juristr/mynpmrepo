import React, { useState } from 'react';
import { Button, Input } from '@packages/ui';
import type { OrderItem } from '../index';

export interface OrderFormProps {
  onSubmit: (items: OrderItem[]) => void;
}

export const OrderForm: React.FC<OrderFormProps> = ({ onSubmit }) => {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [price, setPrice] = useState('0');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (productId && quantity && price) {
      onSubmit([{
        productId,
        quantity: parseInt(quantity),
        price: parseFloat(price)
      }]);
      setProductId('');
      setQuantity('1');
      setPrice('0');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h3>Create New Order</h3>
      <div style={{ marginBottom: '10px' }}>
        <Input 
          placeholder="Product ID" 
          value={productId} 
          onChange={setProductId} 
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Input 
          placeholder="Quantity" 
          value={quantity} 
          onChange={setQuantity} 
          type="number"
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Input 
          placeholder="Price" 
          value={price} 
          onChange={setPrice} 
          type="number"
        />
      </div>
      <Button label="Create Order" onClick={() => {}} variant="primary" />
    </form>
  );
};