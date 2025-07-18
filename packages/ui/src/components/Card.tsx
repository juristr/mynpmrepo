import React from 'react';

export interface CardProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children, footer }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ marginTop: 0, marginBottom: '12px' }}>{title}</h3>
      <div>{children}</div>
      {footer && (
        <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #eee' }}>
          {footer}
        </div>
      )}
    </div>
  );
};