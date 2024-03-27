import React from 'react';
import { useCart } from '../../hooks/useCart';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import classes from './paypal.module.css'; 
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51LZA4YSAVoSl4REK3FkMrJhcBqPqeb4MSwJUT5TSPQ7rOCBsfhnccVuZnYf8HuRifqPcXDvo4ohClcUZeBun4xgZ008GBRiATU');

const CheckoutForm = ({ order }) => {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements(); // Initialize elements

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe or Elements is not initialized');
      return;
    }

    try {
      const { error } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (error) {
        console.error('Stripe error:', error);
        toast.error(error.message, 'Error');
      } else {
        // Payment successful, clear cart and navigate to success page
        clearCart();
        navigate('/success');
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Payment Failed', 'Error');
      // Payment failed, navigate to cancel page or handle error as needed
      navigate('/cancel');
    }
  };

  return (
    <form className={classes.paymentForm} onSubmit={handleSubmit}>
      <CardElement className={classes.cardElement} />
      <button type="submit" className={classes.submitButton}>
        Pay with Stripe
      </button>
    </form>
  );
};

export default function PaypalButtons({ order }) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm order={order} />
    </Elements>
  );
}
