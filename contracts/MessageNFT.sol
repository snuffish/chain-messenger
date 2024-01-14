/// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract MessageNFT {
    bytes public _data;
    
    constructor(bytes memory data) {
        _data = data;
    }
}
