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
