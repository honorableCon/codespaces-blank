const {mainnet, testnet } = require("bitcore-lib/lib/networks");
const { sendBitcoin } = require("./transactions");
const {createHDWallet, createWallet}  = require('./wallet')

const wallet = createHDWallet(testnet);

sendBitcoin("msSNsgETzVMr5jQc1KLZiEqWkK1wp4dvWz",
    "mvqMbw2VFWoFn81ERSWR3YoMynupZndSWk",
    "43a87b7b723d7b24a17a5f503eaea9c47b21752463ec520f582451ad26d6882c",
     20000)
.then( (txn) => console.log(txn))
.catch( (e) => console.log(e));