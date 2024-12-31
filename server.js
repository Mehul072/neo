const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const twilio = require('twilio');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3002; // Use the provided PORT or default to 3002

// CORS configuration
const corsOptions = {
  origin: [
    'https://neo-elevators.netlify.app', // Deployed frontend on Netlify
    'http://localhost:3000',
    'https://neoelevators.in'
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Twilio Credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER;
const recipientWhatsAppNumber = process.env.RECIPIENT_WHATSAPP_NUMBER;

// Ensure Twilio credentials are set
if (!accountSid || !authToken || !twilioWhatsAppNumber || !recipientWhatsAppNumber) {
  console.error("Missing required Twilio environment variables.");
  process.exit(1); // Exit if required environment variables are not set
}

const client = twilio(accountSid, authToken);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;

  // Validate incoming data
  if (!name || !email || !message) {
    return res.status(400).send('All fields are required.');
  }

  const whatsappBody = `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

  client.messages
    .create({
      body: whatsappBody,
      from: `${twilioWhatsAppNumber}`,
      to: `${recipientWhatsAppNumber}`,
    })
    .then(() => res.status(200).send('Message sent successfully via WhatsApp'))
    .catch((err) => {
      console.error('Error sending message:', err);
      res.status(500).send('Error sending message');
    });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
