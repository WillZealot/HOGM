// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.
const express = require('express');
const app = express();
require('dotenv').config();
//const Key = process.env.YOUR_SECRET_KEY;
const stripe = require('stripe')('sk_test_51NwBPtCA50yX0L1LVETwCLMxfqhgbsyotBefX7BK6uybNYbTytMFgAhCDbOcRU462VfasKaGZ8kKs0nO3LwpbAP100OV8nlZma')

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Donate for Hope',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  res.redirect(303, session.url);
});

app.listen(3001, () => console.log(`Listening on port ${3001}!`));