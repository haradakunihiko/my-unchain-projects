// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
// deploy.js
const main = async () => {
  // コントラクトがコンパイルします
  // コントラクトを扱うために必要なファイルが `artifacts` ディレクトリの直下に生成されます。
  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
  // Hardhat がローカルの Ethereum ネットワークを作成します。
  const nftContract = await nftContractFactory.deploy();
  // コントラクトが Mint され、ローカルのブロックチェーンにデプロイされるまで待ちます。
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);
  // makeAnEpicNFT 関数を呼び出す。NFT が Mint される。
  let txn = await nftContract.makeAnEpicNFT();
  // Minting が仮想マイナーにより、承認されるのを待ちます。
  await txn.wait();
  console.log("Minted NFT #1");
  cnt = await nftContract.getCurrentCount();
  console.log("current token minted: " + cnt);
};
// エラー処理を行っています。
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
runMain();
