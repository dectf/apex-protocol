// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity ^0.8.0;

interface IPriceOracle {
    function quote(
        address baseToken,
        address quoteToken,
        uint256 baseAmount
    ) external view returns (uint256 quoteAmount);

    function getIndexPrice(address amm) external view returns (uint256);

    function getMarkPrice(address amm) external view returns (uint256 price);

    function getMarkPriceAcc(
        address amm,
        uint8 beta,
        uint256 quoteAmount,
        bool negative
    ) external view returns (uint256 baseAmount);

    function getPremiumFraction(address amm) external view returns (int256);
}
