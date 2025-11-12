// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title Abuze - example minimal contract to fix parser error
contract Abuze {
    string public message;

    constructor(string memory _message) {
        message = _message;
    }

    function setMessage(string calldata _message) external {
        message = _message;
    }
}