// @ts-ignore
const { menus, coupons, paymentMethods } = require('./dummyData')
const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors())


app.get('/api/menus', (req, res) => {
    console.log(menus)
    res.json(menus)
})
app.get('/api/coupons', (req, res) => res.json(coupons));
app.get('/api/paymentMethods', (req, res) => res.json(paymentMethods));
app.post('/api/payment', (req, res) => res.json());

const port = 8080;

app.listen(process.env.PORT || port);

