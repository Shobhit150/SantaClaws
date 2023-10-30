import { Web3Button, useBalance, useContractCall, useTransactionStatus } from "@thirdweb-dev/react";
import Web3 from "web3";

export default function BuyToken() {
  // Get the balance of the user in wei
  const balance = useBalance();

  // Get the price of the token in wei
  const price = useContractCall("YOUR_CONTRACT_ADDRESS", "PRICE");

  // Convert the price to ether
  const priceInEther = Web3.utils.fromWei(price);

  // Get the status of the transaction
  const status = useTransactionStatus();

  return (
    <div>
      <p>Your balance: {Web3.utils.fromWei(balance)} ETH</p>
      <p>Price of one token: {priceInEther} ETH</p>
      <Web3Button
        contractAddress="YOUR_CONTRACT_ADDRESS"
        action={(contract) => contract.call("buyTokenWithEther")}
      >
        Buy Token
      </Web3Button>
      {status.pending && <p>Waiting for confirmation...</p>}
      {status.confirmed && <p>Transaction confirmed!</p>}
      {status.failed && <p>Transaction failed: {status.error}</p>}
    </div>
  );
} 
