import React, { useState } from 'react';
import { Button, Input } from '@packages/ui';
import type { Product } from '../index';

export interface ProductFormProps {
  onSubmit: (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('0');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('0');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description && price && category) {
      onSubmit({
        name,
        description,
        price: parseFloat(price),
        category,
        stock: parseInt(stock)
      });
      setName('');
      setDescription('');
      setPrice('0');
      setCategory('');
      setStock('0');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h3>Add New Product</h3>
      <div style={{ marginBottom: '10px' }}>
        <Input 
          placeholder="Product Name" 
          value={name} 
          onChange={setName} 
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Input 
          placeholder="Description" 
          value={description} 
          onChange={setDescription} 
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
      <div style={{ marginBottom: '10px' }}>
        <Input 
          placeholder="Category" 
          value={category} 
          onChange={setCategory} 
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Input 
          placeholder="Stock" 
          value={stock} 
          onChange={setStock} 
          type="number"
        />
      </div>
      <Button label="Add Product" onClick={() => {}} variant="primary" />
    </form>
  );
};