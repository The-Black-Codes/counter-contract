import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-ethers'
import { HardhatUserConfig } from 'hardhat/config'

const config: HardhatUserConfig = {
	solidity: '0.8.10',
	paths: {
		tests: './tests',
	},
}

export default config
