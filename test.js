// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: "demo",
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

// Address we want get NFT mints from
const toAddress = "0x1E6E8695FAb3Eb382534915eA8d7Cc1D1994B152";

const res = await alchemy.core.getAssetTransfers({
  fromBlock: "0x0",
  fromAddress: "0x0000000000000000000000000000000000000000",
  toAddress: toAddress,
  excludeZeroValue: true,
  category: ["erc721", "erc1155"],
});

console.log(res);
