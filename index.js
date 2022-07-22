const express = require('express');
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 7777;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const whitelist = ['http://127.0.0.1:5500'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};
app.use(cors(corsOptions));
app.use('/getNews', require('./routes'));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
