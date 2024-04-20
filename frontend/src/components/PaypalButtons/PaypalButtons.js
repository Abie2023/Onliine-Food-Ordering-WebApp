import React from 'react';
import { useCart } from '../../hooks/useCart';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import classes from './paypal.module.css'; 
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { pay, updateOrderStatus } from '../../services/orderService'; 
import Title from '../Title/Title';

const stripePromise = loadStripe('pk_test_51LZA4YSAVoSl4REK3FkMrJhcBqPqeb4MSwJUT5TSPQ7rOCBsfhnccVuZnYf8HuRifqPcXDvo4ohClcUZeBun4xgZ008GBRiATU');

const CheckoutForm = ({ order }) => {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements(); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe or Elements is not initialized');
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (error) {
        console.error('Stripe error:', error);
        toast.error(error.message, 'Error');
      } else {
        const orderId = await pay(paymentMethod.id); 
        await updateOrderStatus(orderId, 'paid'); 
        clearCart();
        toast.success('Payment Saved Successfully', 'Success');
        navigate('/success');
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Payment Failed', 'Error');
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
    <div className={classes.container}>
  <div className={classes.title}>
    <Title title="Enter Payment Details" fontSize="1.2rem"/>
  </div>
  <div className={classes.form}>
    <Elements stripe={stripePromise}>
      <CheckoutForm order={order} />
    </Elements>
    <div className={classes.buttonGroup}>
      <span className={classes.orText}>or</span>
      <button className={classes.cash_button}>
        Pay with Cash
      </button>
    </div>
  </div>
</div>
  );
}