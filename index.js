require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use(bodyParser.json());

app.use('/', require('./routes/cars'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));