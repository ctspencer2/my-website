const nodemailer = require('nodemailer');

// create a transport for sending email
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 465,
  secure: true,
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password'
  }
});

// listen for incoming POST requests
app.post('/submit-form', (req, res) => {
  const { name, email, subject, message } = req.body;

  // send the email
  transporter.sendMail({
    from: 'your-email@example.com',
    to: 'ctspencer432@gmail.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  }, (err, info) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully');
    }
  });
});
