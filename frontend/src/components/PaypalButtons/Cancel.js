import React from 'react';
import { Link } from "react-router-dom";
import styles from './success.module.css'; 
const Success = () => {
  return (
    <div className={styles.successContainer}>
      <div className={styles.glassBox}>    
      <span className={styles.emoji}>😞</span>
        <h1>Payment Unsuccessful!</h1>

        <div className={styles.linksContainer}>
          <Link to="/orders">View your past orders</Link>
          <Link to="/checkout">Retry</Link>
          <Link to="/profile">Go to dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
