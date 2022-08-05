# Smart-Contract-Deployment-and-Send-Transaction-Using-Truffle-Web3-Node.js

This repo is about the deployment of solidity smart contract on ethereum blockchain on rinkeby testnet using truffle and interacting with contract using node.js script for web3.js. The purpose is to 
```
1- Build and deploy your contract using truffle.
2- Writing a node-js script to send the transaction using web3.
3- Writing a node-js script to get the transaction using web3.

```
### Setting Up the Environment

```
1- VSCode
2- Javascript
3- MetaMask
4- Solidity
5- Truffle
6- Web3
7- Node.js
8- Json
9- Ethereum Blockchain

```

Most Ethereum libraries and tools are written in JavaScript, and so is Truffle. If you're not familiar with Node.js, it's a JavaScript runtime built on Chrome's V8 JavaScript engine. It's the most popular solution to run JavaScript outside of a web browser and Truffle is built on top of it.

# Getting Started

## Connect to the Ethereum network
There are many ways to make requests to the Ethereum chain. For simplicity, we’ll use a free account on #Infura, a blockchain developer platform, and API that allows us to communicate with the Ethereum chain without having to run our own nodes. The platform also has developer tools for monitoring and analytics that we’ll take advantage of in this tutorial to understand what’s going on under the hood in our smart contract deployment.


### Initializing NPM

```
npm install -y
```
### Installing Truffle

```
npm install --save-dev truffle
```
### Initializing Truffle

```
truffle init
```
#### Note: You can use your own contract or use default demo contract using truffle init command in terminal 

### Installing Dependencies 
```
npm install --save-dev @truffle/hdwallet-provider

```
Incase of any error during installation, run this command

```
npm i @truffle/hdwallet-provider@next

```
### Installing Dotenv file to keep private key and sensitive data secured

```
npm install dotenv --save
```

#### Your .env should look like this:

```
mnemonic="your-metamask-mnemonic"
infuraUrl="https://rinkeby.infura.io/v3/"
privateKey="your-metamask-private-key"
address="Your-contract-address"
```

### Compiling Smart Contract Using Truffle
To compile the contract run npx truffle compile in your terminal. The compile task is one of the built-in tasks.
```
npx truffle compile
Compiling 1 file....
Compilation finished successfully with solc: 0.8.15+commit.e14f2714.Emscripten.clang

```

### Writing Deployment Script

```

const DemoContract = artifacts.require("DemoContract");

module.exports = function(deployer) {
  deployer.deploy(DemoContract);
};

```

### Deploying Smart contract on Rinkeby Testnet
The contract has been successfully compiled and is ready to be used.
Now, deploy this contract to rinkeby testnet. Run the deployment script present in the scripts folder, using following command:
```
truffle migrate --network rinkeby 
Contract deployed successfully

```

#  Interact with your Smart Contract using web3 and node.js script

### Installing Web3

```
npm install -g web3

```
## Creating a script.js file to send and get transaction using web3 and node.js

```
/** Requiring

** dotenv file 
** web3
** Setting wallet provider

*/
 
require('dotenv').config()
const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');

/** importing
 
** smart contract abi form build folder
** adress of our contract from .env
** private key of our metamask wallet from .env
** Infura Url from .env

**/

const DemoContract = require('./build/contracts/DemoContract.json');
const address = process.env.address;
const privateKey = process.env.privateKey;
const infuraUrl = process.env.infuraUrl;

/** 
 * 
 * 
 * Writing Transaction script for web3 using node.js
 * 
 * 
**/

const SendTransaction = async () => {
  const provider = new Provider(privateKey, infuraUrl); 
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  const myContract = new web3.eth.Contract(
    DemoContract.abi,
    DemoContract.networks[networkId].address
  );

  console.log(await myContract.methods.getData().call());
  console.log(`Old data value: ${await myContract.methods.getData().call()}`);
  const receipt = await myContract.methods.setData(15).send({ from: address });
  console.log(`Transaction hash: ${receipt.transactionHash}`);
  console.log(`New data value: ${await myContract.methods.getData().call()}`);
}

SendTransaction();


```

### Sending transaction to blockchain
Send the transaction using web3.js. Run the node-js script 'node script.js' present in the folder, using following command

```
node script.js
Tx is Successfull

```
### Check the transaction of deployed contract on Etherscan

```
https://rinkeby.etherscan.io/address/0xc483157d284C0df5AaDc38801a15aC535A18fc29

```

## Versioning

```
pragma solidity ^0.8.15;

```

## License

```

//SPDX-License-Identifier: UNLICENSED

```
