const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_portfolio'
});

connection.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

// API endpoint to receive contact form data
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const query = 'INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, NOW())';
  connection.query(query, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error saving message:', err);
      return res.status(500).json({ message: 'Failed to send message.' });
    }
    res.status(200).json({ message: 'Message sent successfully!' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});