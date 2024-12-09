const express = require('express');
const contentRoutes = require('./routes/contentRoutes');
const tipRoutes = require('./routes/tipRoutes');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/content', contentRoutes);
app.use('/api/tips', tipRoutes);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});