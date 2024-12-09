const { zkWallet, contract, zkProvider } = require('../config/zkSync');

const mintContent = async (req, res) => {
  const { uri } = req.body;

  try {
    const mintTx = await contract.populateTransaction.mintContent(uri);
    
    const signedTx = await zkWallet.signTransaction({
      ...mintTx,
      nonce: await zkWallet.getTransactionCount(),
      gasLimit: ethers.utils.parseUnits("1000000", "wei"),
      gasPrice: ethers.utils.parseUnits("20000000000", "wei")
    });

    const receipt = await zkWallet.sendTransaction(signedTx);
    res.status(200).json({ receipt });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const viewContent = async (req, res) => {
  const { id } = req.params;

  try {
    const uri = await contract.viewContent(id);
    res.status(200).json({ id, uri });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  mintContent,
  viewContent
};