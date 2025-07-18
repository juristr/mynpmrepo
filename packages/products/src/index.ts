export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
}

export function createProduct(data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Product {
  return {
    ...data,
    id: generateProductId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

export function updateProductStock(product: Product, quantity: number): Product {
  return {
    ...product,
    stock: product.stock + quantity,
    updatedAt: new Date(),
  };
}

export function isInStock(product: Product): boolean {
  return product.stock > 0;
}

function generateProductId(): string {
  return `PROD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export { ProductList } from './components/ProductList';
export { ProductForm } from './components/ProductForm';