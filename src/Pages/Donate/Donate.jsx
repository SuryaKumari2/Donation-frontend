

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import './Donate.css'; 

const Donate = () => {
  const handleDonation = async () => {
    try {
      const stripePromise = loadStripe('pk_test_51Q0ibLECbEuNV6FTj2fOehOHxIP3C1Xtt4T552jA0eFug9HqtZUSzL9irrILKguLoW1NRQ5NF2C0nlY7yzhsssFA00oxasgD2h');
      const stripe = await stripePromise;

      const response = await fetch('https://donation-backend-d5or.onrender.com/api/payment/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 500 }), 
      });

      const session = await response.json();

      if (response.ok) {

        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          console.error('Error:', result.error.message);
          alert('An error occurred while processing your donation. Please try again later.');
        }
      } else {
        console.error('Error:', session.error);
        alert('An error occurred while processing your donation. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while processing your donation. Please try again later.');
    }
  };

  return (
    <div className="donate">
      <div className="donate-quote">
        "Giving is not just about making a donation. It is about making a difference."
      </div>
      <button onClick={handleDonation}>Donate now</button>
    </div>
  );
};

export default Donate;
