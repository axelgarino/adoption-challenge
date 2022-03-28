// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Adoption { 

	address[16] public adopters;
	// adopters[1] = 0x... esta address esta en la posicion 1

	function getAdopters() public view returns (address[16] memory) {
		return adopters;
	}

	function getAdopterOf(uint petId) public view returns (address){
		return adopters[petId];
	}

	function adopt(uint petId) public returns(uint){
		require(petId >= 0 && petId <= 15, "Invalid petId");
		adopters[petId] = msg.sender;
		return petId;
	}

	
}