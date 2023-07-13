// Bridge to access web3
const { ethers } = require("ethers");

// Network, transfer amount, Network's etherscan
const { RPC, ETH, ETHERSCAN } = require("./config");

// Addresses
const { W_2, W_3, W_4, W_5, W_6, W_7, W_8, W_9, W_10 } = require("./config").addresses;

// Private key
const { main } = require("./config").keys;

// Connect to blockchain
const provider = new ethers.providers.JsonRpcProvider(RPC);

// Create wallets for main
const walletMain = new ethers.Wallet(main, provider);

// Amount to transfer
const transferAmount = ethers.utils.parseEther(ETH);

// Transfer function
(async function () {
  try {
    console.log("== Starting Transaction ==");

    // Send ETH from main to W_2
    const transaction1 = await walletMain.sendTransaction({
      to: W_2,
      value: transferAmount,
    });

    console.log(`Transfer Successful to W_2. Tx => [${transaction1.hash}]`);

    // Send ETH from main to W_3
    const transaction2 = await walletMain.sendTransaction({
      to: W_3,
      value: transferAmount,
    });

    console.log(`Transfer Successful to W_3. Tx => [${transaction2.hash}]`);

    // Send ETH from main to W_4
    const transaction3 = await walletMain.sendTransaction({
      to: W_4,
      value: transferAmount,
    });

    console.log(`Transfer Successful to W_4. Tx => [${transaction3.hash}]`);

    // Send ETH from main to W_5
    const transaction4 = await walletMain.sendTransaction({
      to: W_5,
      value: transferAmount,
    });

    console.log(`Transfer Successful to W_5. Tx => [${transaction4.hash}]`);

    // Send ETH from main to W_6
    const transaction5 = await walletMain.sendTransaction({
      to: W_6,
      value: transferAmount,
    });

    console.log(`Transfer Successful to W_6. Tx => [${transaction5.hash}]`);

    // Send ETH from main to W_7
    const transaction6 = await walletMain.sendTransaction({
      to: W_7,
      value: transferAmount,
    });

    console.log(`Transfer Successful to W_7. Tx => [${transaction6.hash}]`);

    // Send ETH from main to W_8
    const transaction7 = await walletMain.sendTransaction({
      to: W_8,
      value: transferAmount,
    });

    console.log(`Transfer Successful to W_8. Tx => [${transaction7.hash}]`);

    // Send ETH from main to W_9
    const transaction8 = await walletMain.sendTransaction({
      to: W_9,
      value: transferAmount,
    });

    console.log(`Transfer Successful to W_9. Tx => [${transaction8.hash}]`);

    // Send ETH from main to W_10
    const transaction9 = await walletMain.sendTransaction({
      to: W_10,
      value: transferAmount,
    });

    console.log(`Transfer Successful to W_10. Tx => [${transaction9.hash}]`);

    console.log(`== Transfers Complete! ==`);
    console.log(`See transactions at: ${ETHERSCAN}/address/${walletMain.address}`);

    //Log errors to the terminal
  } catch (err) {
    console.error(err);
  }
})();