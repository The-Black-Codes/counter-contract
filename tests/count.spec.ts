import chai from 'chai'
import { solidity } from 'ethereum-waffle'
import { deployContract } from '../scripts/deployContract'

const { expect } = chai.use(solidity)

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
