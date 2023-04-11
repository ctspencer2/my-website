const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const sendEmail = require('./send-email');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {
  const { name, email, subject, message } = req.body;
  sendEmail(name, email, subject, message);
  res.send('Email sent successfully');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
