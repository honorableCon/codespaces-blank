const express = require('express')
const { sendBitcoin } = require('./transactions')
const { createWallet } = require('./wallet')
const app = express()
const port = 3000

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Welcome too sunucalpe !");
})

app.post('/wallet', (req, res) => {
    const wallet = createWallet();
    res.json(wallet);
})


app.post('/transactions',  async (req, res)=> {
    const { sender, receiver, privateKey, amount } = req.body;
    const txn = await sendBitcoin(sender, receiver, amount, privateKey)
    res.json(txn);
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

