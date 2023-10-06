// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors'); // Import the cors package
const Key = process.env.YOUR_SECRET_KEY;
const stripe = require('stripe')(Key);

const port = process.env.PORT||3001;

app.use(cors());

app.post('/checkout', async (req, res) => {
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

app.listen(port, () => console.log(`Listening on port ${port}!`));