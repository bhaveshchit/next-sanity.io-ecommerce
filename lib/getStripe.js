import { loadStripe}  from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51Lx8XMSEreEvFHwPOPPd8f3GhbPNYPo4ZGXoc2aIMPey548HtxA5EZU91MjndP1d0kts6ekagZ3r9aGcCB7cPGRT004x5Qrc3u');
  }

  return stripePromise;
}

export default getStripe;