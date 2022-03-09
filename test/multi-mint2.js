const { BigNumber } = require("@ethersproject/bignumber");
const { expect } = require("chai");
const  fs  = require('fs');

async function deploy(name, ...params) {
  const Contract = await ethers.getContractFactory(name);
  return await Contract.deploy(...params).then((f) => f.deployed());
}
// it takes long time to test.  please open it individually
describe("multimint2 contract", function () {
  let nftSquid;
  let multiMint;
  let erc20;
  let exp1 = ethers.BigNumber.from("10").pow(18);
  let dateTime = new Date();
  let ct = Math.floor(dateTime / 1000);


  beforeEach(async function () {
    [owner, addr1, liquidator, ...addrs] = await ethers.getSigners();
    console.log(owner.address)
    erc20 = await deploy("MyToken", "AAA token", "AAA", 18, 100000000);
    
   
    const NftSquid = await ethers.getContractFactory("NftSquid");
    const MultiMint2 = await ethers.getContractFactory("MultiMintForUsers");
    nftSquid = await NftSquid.deploy("APEX NFT", "APEXNFT", "https://apexNFT/", erc20.address, ct-1000, ct+5800);
    multiMint2 = await MultiMint2.deploy(nftSquid.address);
    console.log("nftSquid: ", nftSquid.address);
    console.log("multiMint: ", multiMint2.address);
    console.log("nftSquid: ", nftSquid.address);

   // await erc20.transfer(nftSquid.address, ethers.BigNumber.from(4500 * 1000).mul(exp1));

    balance = await ethers.provider.getBalance(multiMint2.address);
    console.log(balance);
  });

  it("burn  4560 in  0 month", async function () {
    //await nftSquid.setStartTime(ct + 500);
   
    // console.log("balance: ", balance.div(exp1).toString());

      let tx = await multiMint2.multiMint(10, {value: ethers.utils.parseEther("4.5")});
      let txReceipt = await tx.wait();
      // console.log(txReceipt);
    
   
    //console.log("mint nft successfully: ", txReceipt);
  


    
    // await nftSquid.setSquidStartTime(ct + 6000);
    // await ethers.provider.send("evm_setNextBlockTimestamp", [ct + 6000]);
    // await network.provider.send("evm_mine");

  


    // expect(args[1].div(exp1).toString()).to.be.equal("123635");
    // expect(args[0].toString()).to.be.equal("4559");

    // await nftSquid.withdrawETH(owner.address);
    // let balanceAfter = await ethers.provider.getBalance(owner.address);
    // expect(balanceAfter.div(exp1).toString()).to.be.equal("9998");
    // let apexAmount = await erc20.balanceOf(nftSquid.address);
    // expect(apexAmount.div(exp1).toString()).to.be.equal("0");
  });


});
