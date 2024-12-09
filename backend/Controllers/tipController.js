const { zkWallet, zkProvider } = require('../config/zkSync');
const ethers = require('ethers');

const sendTip = async (req, res) => {
  const { amount, creatorAddress, message } = req.body;

  try {
    const tx = await zkWallet.syncTransfer({
      to: creatorAddress,
      token: 'ETH',
      amount: ethers.utils.parseEther(amount.toString())
    });

    const receipt = await zkProvider.waitForTransaction(tx.txHash);
    res.status(200).json({ receipt });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  sendTip
};
