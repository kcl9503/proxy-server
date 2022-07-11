const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 7777;
const app = express();

// const whitelist = ['http://127.0.0.1:5500'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};
app.use(cors());
app.use('/account/signin', require('./routes'));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
