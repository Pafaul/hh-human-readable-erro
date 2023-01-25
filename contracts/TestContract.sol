// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

// contract HumanReadableErrors {
//     uint256 public id_;
//     function testMe(uint256[] memory id) external {
//         id_ = id[0];
//     }
// }

contract HumanReadableErrors {
    uint256 public id_;
    function testMe(uint256[] memory id, address[] memory users) external {
        id_ = id[0] + uint160(users[0]);
    }
}