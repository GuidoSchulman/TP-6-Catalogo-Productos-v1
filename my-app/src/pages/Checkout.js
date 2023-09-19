import React from 'react';
import BillingDetails from '../components/billingDetails';
import OrderSummary from '../components/orderSummary';


function Checkout() {
  return (<>
<BillingDetails></BillingDetails>
<OrderSummary></OrderSummary>
    </>
  );
}

export default Checkout;