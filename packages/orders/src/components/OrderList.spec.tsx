import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { OrderList } from './OrderList';
import type { Order } from '../index';

describe('OrderList', () => {
  it('renders title', () => {
    render(<OrderList orders={[]} />);
    expect(screen.getByText('Orders')).toBeInTheDocument();
  });

  it('shows message when no orders', () => {
    render(<OrderList orders={[]} />);
    expect(screen.getByText('No orders yet')).toBeInTheDocument();
  });

  it('renders list of orders', () => {
    const mockOrders: Order[] = [
      {
        id: 'ORDER-1',
        customerId: 'CUST-123',
        items: [
          { productId: 'PROD-1', quantity: 2, price: 50 },
          { productId: 'PROD-2', quantity: 1, price: 75 }
        ],
        total: 175,
        status: 'pending',
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-15')
      },
      {
        id: 'ORDER-2',
        customerId: 'CUST-456',
        items: [
          { productId: 'PROD-3', quantity: 3, price: 30 }
        ],
        total: 90,
        status: 'shipped',
        createdAt: new Date('2024-01-16'),
        updatedAt: new Date('2024-01-17')
      }
    ];

    render(<OrderList orders={mockOrders} />);
    
    expect(screen.getByText('Order ORDER-1')).toBeInTheDocument();
    expect(screen.getByText('Order ORDER-2')).toBeInTheDocument();
    
    expect(screen.getByText('Total: $175.00')).toBeInTheDocument();
    expect(screen.getByText('Total: $90.00')).toBeInTheDocument();
    
    expect(screen.getAllByText(/Status:/).length).toBe(2);
    expect(screen.getByText('pending')).toBeInTheDocument();
    expect(screen.getByText('shipped')).toBeInTheDocument();
    
    expect(screen.getByText('Items: 2')).toBeInTheDocument();
    expect(screen.getByText('Items: 1')).toBeInTheDocument();
  });

  it('formats dates correctly', () => {
    const mockOrder: Order = {
      id: 'ORDER-1',
      customerId: 'CUST-123',
      items: [],
      total: 0,
      status: 'pending',
      createdAt: new Date('2024-03-15T10:30:00'),
      updatedAt: new Date('2024-03-15T10:30:00')
    };

    render(<OrderList orders={[mockOrder]} />);
    
    expect(screen.getByText(/Created:.*3\/15\/2024/)).toBeInTheDocument();
  });
});