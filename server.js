const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./send-email');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint for form submission
app.post('/submit-form', (req, res) => {
  const { name, email, subject, message } = req.body;
  sendEmail(name, email, subject, message)
    .then(() => res.send('Email sent successfully'))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error sending email');
    });
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
