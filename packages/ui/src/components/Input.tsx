import React from 'react';

export interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number';
}

export const Input: React.FC<InputProps> = ({ 
  placeholder = '', 
  value, 
  onChange, 
  type = 'text' 
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: '8px 12px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '14px',
        width: '100%',
        boxSizing: 'border-box'
      }}
    />
  );
};