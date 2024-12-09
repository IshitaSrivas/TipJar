// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TipJar is ERC721, Ownable {
    struct Content {
        uint id;
        string uri;
        address creator;
    }

    uint public contentCount;
    mapping(uint => Content) public contents;
    mapping(address => uint256) public tipsReceived;
    mapping(address => uint256) public lastWithdrawalTime;
    mapping(address => uint256) public withdrawalLimits;

    uint256 public constant WITHDRAWAL_COOLDOWN = 1 days;
    uint256 public constant MAX_WITHDRAWAL_AMOUNT = 1 ether;
    
    event TipSent(address indexed from, address indexed to, uint256 amount, string message);
    event Withdrawal(address indexed to, uint256 amount);
    event ContentMinted(uint indexed contentId, string uri, address indexed creator);

    constructor() ERC721("ContentNFT", "CNT") {}

    function mintContent(string memory _uri) public {
        contentCount++;
        _mint(msg.sender, contentCount);
        contents[contentCount] = Content(contentCount, _uri, msg.sender);
        
        emit ContentMinted(contentCount, _uri, msg.sender);
    }

    function sendTip(address _creator, string memory _message) public payable {
        require(msg.value > 0, "Tip must be greater than 0");

        tipsReceived[_creator] += msg.value;
        
        emit TipSent(msg.sender, _creator, msg.value, _message);
    }

    function setWithdrawalLimit(address _creator, uint256 _limit) public onlyOwner {
        withdrawalLimits[_creator] = _limit;
    }

    function withdrawTips() public {
        uint256 amount = tipsReceived[msg.sender];
        require(amount > 0, "No tips to withdraw");
        require(block.timestamp >= lastWithdrawalTime[msg.sender] + WITHDRAWAL_COOLDOWN, "Withdrawal cooldown period not met");
        require(amount <= MAX_WITHDRAWAL_AMOUNT && amount <= withdrawalLimits[msg.sender], "Withdrawal amount exceeds limit");

        tipsReceived[msg.sender] = 0;
        lastWithdrawalTime[msg.sender] = block.timestamp;
        payable(msg.sender).transfer(amount);

        emit Withdrawal(msg.sender, amount);
    }

    function viewContent(uint _contentId) public view returns (string memory) {
        return contents[_contentId].uri;
    }
}

