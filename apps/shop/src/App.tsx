import { useState } from 'react';
import { Button, Card } from '@packages/ui';
import { ProductList, ProductForm, createProduct } from '@packages/products';
import type { Product } from '@packages/products';
import { OrderList, OrderForm, createOrder } from '@packages/orders';
import type { Order, OrderItem } from '@packages/orders';
import './App.css';

function App() {
  const [products, setProducts] = useState<Product[]>([
    createProduct({
      name: 'Sample Product',
      description: 'This is a sample product',
      price: 29.99,
      category: 'Electronics',
      stock: 10
    })
  ]);
  
  const [orders, setOrders] = useState<Order[]>([]);
  const [showProductForm, setShowProductForm] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleAddProduct = (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newProduct = createProduct(productData);
    setProducts([...products, newProduct]);
    setShowProductForm(false);
  };

  const handleCreateOrder = (items: OrderItem[]) => {
    const newOrder = createOrder('CUSTOMER-001', items);
    setOrders([...orders, newOrder]);
    setShowOrderForm(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Shop Demo App</h1>
      
      <Card title="UI Components Demo">
        <p>This demo shows components from all three packages working together!</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <Button label="Primary Button" variant="primary" onClick={() => alert('Primary clicked!')} />
          <Button label="Secondary Button" variant="secondary" onClick={() => alert('Secondary clicked!')} />
          <Button label="Danger Button" variant="danger" onClick={() => alert('Danger clicked!')} />
        </div>
      </Card>

      <div style={{ marginTop: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2>Products Management</h2>
          <Button 
            label={showProductForm ? 'Hide Form' : 'Add Product'} 
            onClick={() => setShowProductForm(!showProductForm)} 
          />
        </div>
        
        {showProductForm && <ProductForm onSubmit={handleAddProduct} />}
        <ProductList products={products} />
      </div>

      <div style={{ marginTop: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2>Orders Management</h2>
          <Button 
            label={showOrderForm ? 'Hide Form' : 'Create Order'} 
            onClick={() => setShowOrderForm(!showOrderForm)} 
          />
        </div>
        
        {showOrderForm && <OrderForm onSubmit={handleCreateOrder} />}
        <OrderList orders={orders} />
      </div>
    </div>
  );
}

export default App;