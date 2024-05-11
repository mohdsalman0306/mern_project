const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const keys = require('./config/keys')


mongoose.connect(keys.mongoUri)

const app = express();
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || '5001';
app.listen(PORT);