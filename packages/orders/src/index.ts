export interface Order {
  id: string;
  customerId: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export function createOrder(customerId: string, items: OrderItem[]): Order {
  return {
    id: generateOrderId(),
    customerId,
    items,
    total: calculateOrderTotal(items),
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

export function calculateOrderTotal(items: OrderItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

function generateOrderId(): string {
  return `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}