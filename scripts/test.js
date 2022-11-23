// Setup: npm install alchemy-sdk
const alchemySdk = require("alchemy-sdk");
const Alchemy = alchemySdk.Alchemy;
const Network = alchemySdk.Network;

(async function main() {

  const config = {
    apiKey: "your api key",
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy(config);

  const USDCaddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  const thatguyintech = "thatguyintech.eth";

  const usdcTransfersToAlbert = await alchemy.core.getAssetTransfers({
    toAddress: thatguyintech,
    contractAddresses: [USDCaddress],
    category: ["erc20"],
  });

  console.log("transfers to me: ", usdcTransfersToAlbert);

  const usdcTransfersFromAlbert = await alchemy.core.getAssetTransfers({
    fromAddress: thatguyintech,
    contractAddresses: [USDCaddress],
    category: ["erc20"],
  });

  console.log("transfers from me: ", usdcTransfersFromAlbert);
})();
