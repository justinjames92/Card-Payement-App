import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51NhxZFBmXesBWQJWg9L2bKVfydIR5UFonjB5bYfh80cRlv9YLRDJbKAcwv3jJJ16FVgnngOMZedamvWxMbnZC6Yn00aEEm5h2L');
  }
  return stripePromise;
};

export default getStripe;