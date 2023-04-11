const nodemailer = require('nodemailer');

function sendEmail(name, email, subject, message) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 465,
    secure: true,
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password'
    }
  });

  transporter.sendMail({
    from: 'your-email@example.com',
    to: 'ctspencer432@gmail.com',
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  }, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = sendEmail;
