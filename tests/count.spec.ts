import chai from 'chai'
import '@nomiclabs/hardhat-ethers'
import { ethers } from 'hardhat'
import { solidity } from 'ethereum-waffle'

const { expect } = chai.use(solidity)

async function deployContract(name: string) {
	const TargetContract = await ethers.getContractFactory(name)
	const targetContract = await TargetContract.deploy()
	await targetContract.deployed()
	return targetContract
}

describe('Counter Contract', () => {
	it('by default has a value of 0', async () => {
		const counter = await deployContract('Counter')
		const value = await counter.getCount()
		expect(value).to.equal(0)
	})
	it("exposes an 'inc' function which increments the count", async () => {
		const counter = await deployContract('Counter')
		await counter.inc()
		const value = await counter.getCount()
		expect(value).to.equal(1)
	})
	it("exposes a 'dec' function which decrements the count", async () => {
		const counter = await deployContract('Counter')
		await counter.dec()
		const value = await counter.getCount()
		expect(value).to.equal(-1)
	})
})
