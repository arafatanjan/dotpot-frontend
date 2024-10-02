import React from 'react';
import { useParams } from 'react-router-dom';
import pic from '../assets/successful.png'

const PaymentSuccess = () => {
    const {tranId} = useParams();
    return (
        <div style={{ marginTop: '6rem' }}>
           
            <div className="d-flex justify-content-center mt-5 mb-5">
            <img
            width='600rem'
              src={pic}
              alt="successful"
              style={{ position: 'relative', zIndex: 1 }}
            />
          </div>
           <h3
           style={{
            position: 'absolute',
            top: '75%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'black', 
            zIndex: 2, 
            fontSize: '1rem',
            fontWeight:"bold",
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', 
          }}
           ><span style={{fontWeight:"bolder" }}>TranId:</span>&nbsp;&nbsp;{tranId}</h3> 
        </div> 
    );
};

export default PaymentSuccess;