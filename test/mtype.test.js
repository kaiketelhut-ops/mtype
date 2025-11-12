const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MType", function () {
  let MType, mtype, owner, addr;

  beforeEach(async function () {
    MType = await ethers.getContractFactory("MType");
    [owner, addr] = await ethers.getSigners();
    mtype = await MType.deploy("initial");
    await mtype.deployed();
  });

  it("should have the initial message set by the constructor", async function () {
    expect(await mtype.message()).to.equal("initial");
  });

  it("should allow updating the message via setMessage", async function () {
    await mtype.setMessage("updated");
    expect(await mtype.message()).to.equal("updated");
  });

  it("should allow anyone to call setMessage (no access control)", async function () {
    await mtype.connect(addr).setMessage("byAddr");
    expect(await mtype.message()).to.equal("byAddr");
  });
});