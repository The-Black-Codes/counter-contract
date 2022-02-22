import '@nomiclabs/hardhat-ethers'
import { ethers } from 'hardhat'
export async function deployContract(name: string) {
	const TargetContract = await ethers.getContractFactory(name)
	const targetContract = await TargetContract.deploy()
	await targetContract.deployed()
	return targetContract
}
