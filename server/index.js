const express = require('express');
const app = express();
const port = 3000;

const fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Grapes",
  "Pineapple",
  "Strawberry",
  "Watermelon",
  "Peach",
  "Kiwi"
];

// API endpoint to get the list of fruits
app.get('/api/fruits', (req, res) => {
  res.json(fruits);
});

// Start the server
app.listen(port, () => {
  console.log(`Fruits API is running on http://localhost:${port}`);
});
