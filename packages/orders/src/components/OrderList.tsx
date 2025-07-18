import React from 'react';
import { Card } from '@packages/ui';
import type { Order } from '../index';

export interface OrderListProps {
  orders: Order[];
}

export const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  return (
    <div>
      <h2>Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order) => (
          <Card 
            key={order.id} 
            title={`Order ${order.id}`}
            footer={`Total: $${order.total.toFixed(2)}`}
          >
            <p>Status: <strong>{order.status}</strong></p>
            <p>Items: {order.items.length}</p>
            <p>Created: {new Date(order.createdAt).toLocaleDateString()}</p>
          </Card>
        ))
      )}
    </div>
  );
};