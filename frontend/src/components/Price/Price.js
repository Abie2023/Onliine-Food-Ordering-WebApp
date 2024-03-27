import React from 'react';

export default function Price({ price, currency }) {
  const formatPrice = () =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency,
    }).format(price);

  return <span>{formatPrice()}</span>;
}

Price.defaultProps = {
  currency: 'INR',
};
