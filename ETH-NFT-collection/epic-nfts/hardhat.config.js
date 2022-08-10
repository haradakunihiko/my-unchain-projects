require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Ah5tyekDMDmhnWGqFq4HnNipeScLdIOo",
      accounts: ["c6ab7688a2dc18ad8a37925ed97dd729a337ea279116874ee30785ae20b37d23"],
    },
  },
};
