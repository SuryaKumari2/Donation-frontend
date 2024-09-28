import React from 'react';
import './Success.css'; 

const Cancel = () => {
  return (
    <div className="cancel">
      <h1>Payment Cancelled</h1>
      <p>It seems like the donation process was cancelled. If you encountered an issue, please try again.</p>
    </div>
  );
};

export default Cancel;
