// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "./Main.sol";

contract Store {
    uint productIndex = 0;

    // 官方积分商店
    // 商品结构
    struct Product {
        uint id;
        string name;
        string details;
        uint price;
        // 库存
        uint inventory;
    }

    // 商品列表
    mapping(uint => Product) productList;

    // 上传商品（仅供测试人员使用）
    function createProduct(string memory _name, string memory _details, uint _price, uint _inventory) external {
        Product memory _product;
        _product.id = ++productIndex;
        _product.name = _name;
        _product.details = _details;
        _product.price = _price;
        _product.inventory = _inventory;
        productList[productIndex] = _product;
    }

    // 获取商品列表
    function getProductList() external view returns (Product[] memory) {
        Product[] memory _List = new Product[](productIndex);
        for (uint i = 0; i < productIndex; i++) {
            _List[i] = productList[i+1];
        }
        return (_List);
    }

    // 用户兑换商品
    function purchase(Main _mainContract, uint _productIndex) external {
        require(productList[_productIndex].inventory > 0, "Inventory not enough!");
        require(_mainContract.getBalanceOf(msg.sender) >= productList[_productIndex].price, "Credit balance not enough!");
        --productList[_productIndex].inventory;
        _mainContract.transfer(msg.sender, _mainContract.getAdministratorAdd(), productList[_productIndex].price);
    }
}