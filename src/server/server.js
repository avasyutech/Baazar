const path = require('path');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const uniquePaymentId = (existingIds = []) => {
  let id;
  do {
      id = Math.floor(Math.random() * 900000) + 100000;
  } while (existingIds.includes(id));
  return id;
};

const app = express();
const PORT = 9000;
let productsData;

app.use(cors());
app.use(express.json());

try {
  productsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../json/products.json')));
}
catch (error) {
  console.error('server error', error);
}

app.get('/products', (req, res) => {
  res.json(productsData);
});

app.get('/payments', (req, res) => {
  let ordersData = JSON.parse(fs.readFileSync(path.join(__dirname, '../json/payments.json')));
  res.json(ordersData);
});

app.use('/icons', express.static(path.join(__dirname, '../assets/icons/')));
app.use('/images', express.static(path.join(__dirname, '../assets/images/')));


app.post('/signup', (req, res) => {
  const newUser = req.body;
  
  if (newUser) {
    const userData = JSON.parse(fs.readFileSync(path.join(__dirname, '../json/users.data')))
    userData.push(newUser);
    fs.writeFileSync(path.join(__dirname, '../json/users.json'), JSON.stringify(userData));
    res.json("Data submission is successful");
  }
});


app.post('/payment', (req, res) => {
  const { username, mobile, cartDetails, total } = req.body;
  readline.question('Is the payment need to be approved? (yes/no): ', (userInput) => {
    const isPaymentApproved = userInput.toLowerCase() === 'yes';
    const response = {
      status: isPaymentApproved ? 'success' : 'fail',
      message: isPaymentApproved ? 'Payment successful!' : 'Payment failed.',
    };

    if (isPaymentApproved) {
      let paymentsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../json/payments.json')));
      const existingIds = paymentsData.map((payment) => payment.id);
      const paymentId = uniquePaymentId(existingIds);

      const payment = { id: paymentId, username, mobile, cartDetails, total,  timestamp: new Date().toISOString().replace(/T.*/,'').split('-').reverse().join('-') };
      paymentsData.push(payment);
      fs.writeFileSync(path.join(__dirname, '../json/payments.json'), JSON.stringify(paymentsData));
    }

    res.json(response);
    readline.close();
  });
});

app.listen(PORT, () => {
  console.log('server is running');
});
