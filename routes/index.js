const express = require('express');
const router = express.Router();
const needle = require('needle');

const baseUrl = process.env.API_BASE_URL;
const data = {
    email: 'paosong91@gmail.com',
    password: '123456',
};
const options = {
    compressed: true,
    accept: 'application/json',
    content_type: 'application/json',
};
router.get('/', async (req, res) => {
    try {
        const apiRes = await needle(
            'post',
            `${baseUrl}/account/signin`,
            data,
            options
        );
        console.log(apiRes.body);
        res.status(200).json(apiRes.body);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

router.get('/signup', async (req, res) => {
    try {
        const apiRes = await needle(
            'get',
            `https://restful.pubhx.com:3032/hx/?service=${req.query.service}&Id=${req.query.Id}&companyId=${req.query.companyId}`
        );
        console.log(apiRes.body);
        res.status(200).json(apiRes.body);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

module.exports = router;
