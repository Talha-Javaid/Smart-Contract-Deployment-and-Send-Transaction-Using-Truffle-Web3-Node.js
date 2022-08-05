//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

contract DemoContract{
  uint public Data;

  function setData(uint _Data) external {
    Data = _Data;
  }

  function getData() external view returns (uint) {
    return Data;
  }
}
