const DemoContract = artifacts.require("DemoContract");

module.exports = function(deployer) {
  deployer.deploy(DemoContract);
};
