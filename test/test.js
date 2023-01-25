const { expect } = require('chai');
const hre = require('hardhat');

describe('Try to reproduce error', async function() {
    /** @type {import('../typechain').HumanReadableErrors} */
    let testContract;

    beforeEach(async function() {
        const HumanReadableErrors = await hre.ethers.getContractFactory('HumanReadableErrors');
        testContract = await HumanReadableErrors.deploy();
        await testContract.deployed();
    })

    it('Error', async function() {
        await expect(
            testContract.testMe([1], [testContract.address])
        ).to.not.be.reverted;
    })
})