import { ethers } from "hardhat";

async function main() {
  const ChatApp = await ethers.getContractFactory("ChatApp");
  const chatApp = await ChatApp.deploy();

  await chatApp.deployed();

  console.log(` Contract Address: ${chatApp.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
