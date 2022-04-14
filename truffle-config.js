const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "contracts"),
  networks: {
    develop: {
      port: 7545
    }
  },
  compilers: {
    solc: {
      version: "0.8.0"
    }
 }
};
