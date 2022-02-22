// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.10;

contract Counter {
	int256 public count;

	function inc() public {
		count++;
	}

	function dec() public {
		count--;
	}

	function getCount() public view returns (int256) {
		return count;
	}
}
