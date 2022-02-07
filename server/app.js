// @ts-ignore
const { menus, coupons } = require('./dummyData')
const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors())


app.get('/api/menus', (req, res) => {
    console.log(menus)
    res.json(menus)
})
app.get('/api/coupons', (req, res) => res.json(coupons));
app.post('/api/payment', (req, res) => res.json());

const port = 8080;

app.listen(process.env.PORT || port);

