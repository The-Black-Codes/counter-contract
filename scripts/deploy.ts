import { deployContract } from './deployContract'

async function main() {
	await deployContract('Counter')
}

main().catch(console.error)
