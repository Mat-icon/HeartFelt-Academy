const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the origin of your React app
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465, // Use the correct port for Gmail (secure connection)
  secure: true,
  auth: {
    user: 'matthewameh007@gmail.com',
    pass: 'passworded',
  },
});

// Endpoint for sending emails
app.post('/send-email', async (req, res) => {
  const { fullName, email, text } = req.body;

  const mailOptions = {
    from: {
      name: 'Matthew Ameh',
      address: 'matthewameh007@gmail.com',
    },
    to: 'landpathgroup@gmail.com',
    subject: 'Just testing node',
    text: `Message from ${fullName}: ${text}`,
    html: `<b>Message from ${fullName}:</b><br>${text}`,
  };

  try {
    // Send the email using the Nodemailer transporter
    await transporter.sendMail(mailOptions);
    console.log('Email has been sent');
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});
