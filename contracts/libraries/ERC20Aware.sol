// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../interfaces/IERC20.sol";
import "../utils/Reentrant.sol";

abstract contract ERC20Aware is Reentrant {
    address public token;

    constructor(address _token) {
        require(_token != address(0), "token address not set");
        token = _token;
    }

    function transferTokenFrom(
        address _from,
        address _to,
        uint256 _value
    ) internal nonReentrant {
        IERC20(token).transferFrom(_from, _to, _value);
    }
}
