import React from 'react';
import { useParams } from 'react-router-dom';
import error from "../assets/error.png"

const PaymentSuccess = () => {
    
    return (
        <div style={{ marginTop: '6rem' }}>
           
            <div className="d-flex justify-content-center mt-5 mb-5">
            <img
            width='600rem'
              src={error}
              alt="successful"
              style={{ position: 'relative', zIndex: 1 }}
            />
          </div>
           
        </div> 
    );
};

export default PaymentSuccess;