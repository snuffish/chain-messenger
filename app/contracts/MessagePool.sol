/// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "./MessageNFT.sol";

contract MessagePool {
    event StorageAdded(address indexed sender);
    
    string public _name;
    MessageNFT[] public _storage;
    
    constructor(string memory name) {
        _name = name;
    }

    function addStorage(MessageNFT nft) public {
        _storage.push(nft);
    }
}
