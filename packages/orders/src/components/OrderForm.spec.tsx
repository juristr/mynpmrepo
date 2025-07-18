import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { OrderForm } from './OrderForm';

describe('OrderForm', () => {
  it('renders form elements', () => {
    const mockOnSubmit = vi.fn();
    render(<OrderForm onSubmit={mockOnSubmit} />);
    
    expect(screen.getByText('Create New Order')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Product ID')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Quantity')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Price')).toBeInTheDocument();
    expect(screen.getByText('Create Order')).toBeInTheDocument();
  });

  it('submits form with valid data', () => {
    const mockOnSubmit = vi.fn();
    const { container } = render(<OrderForm onSubmit={mockOnSubmit} />);
    
    const productIdInput = screen.getByPlaceholderText('Product ID');
    const quantityInput = screen.getByPlaceholderText('Quantity');
    const priceInput = screen.getByPlaceholderText('Price');
    const form = container.querySelector('form')!;
    
    fireEvent.change(productIdInput, { target: { value: 'PROD-123' } });
    fireEvent.change(quantityInput, { target: { value: '5' } });
    fireEvent.change(priceInput, { target: { value: '99.99' } });
    fireEvent.submit(form);
    
    expect(mockOnSubmit).toHaveBeenCalledWith([
      {
        productId: 'PROD-123',
        quantity: 5,
        price: 99.99
      }
    ]);
  });

  it('resets form after submission', () => {
    const mockOnSubmit = vi.fn();
    const { container } = render(<OrderForm onSubmit={mockOnSubmit} />);
    
    const productIdInput = screen.getByPlaceholderText('Product ID');
    const quantityInput = screen.getByPlaceholderText('Quantity');
    const priceInput = screen.getByPlaceholderText('Price');
    const form = container.querySelector('form')!;
    
    fireEvent.change(productIdInput, { target: { value: 'PROD-123' } });
    fireEvent.change(quantityInput, { target: { value: '5' } });
    fireEvent.change(priceInput, { target: { value: '99.99' } });
    fireEvent.submit(form);
    
    expect(productIdInput).toHaveValue('');
    expect(quantityInput).toHaveValue(1);
    expect(priceInput).toHaveValue(0);
  });

  it('does not submit form with empty fields', () => {
    const mockOnSubmit = vi.fn();
    const { container } = render(<OrderForm onSubmit={mockOnSubmit} />);
    
    const form = container.querySelector('form')!;
    fireEvent.submit(form);
    
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });
});