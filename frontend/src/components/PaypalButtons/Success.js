import React from 'react';
import { Link } from "react-router-dom";
import styles from './success.module.css'; 
import GreenTickIcon from './GreenTickIcon'; 
const Success = () => {
  return (
    <div className={styles.successContainer}>
      <div className={styles.glassBox}>    
        <GreenTickIcon className={styles.tickIcon} />

        <h1>Payment Successful!</h1>

        <div className={styles.linksContainer}>
          <Link to="/orders">View your past orders</Link>
          <Link to="/">Back to home page</Link>
          <Link to="/profile">Go to dashboard</Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
