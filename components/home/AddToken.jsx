import React from 'react';
import { ethers } from 'ethers';
import logo from '@/public/assets/image/logo/santa__logo.png'

function AddToken() {
  // Define your token's properties
  const token = {
    address: '0x834C108A211f725F6fAa327F7c386D8F3a770DBE',
    symbol: 'CLAWS',
    decimals: 18,
    image: logo,
  };

  const handleAddToken = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      try {
        // Request account access if needed
        await provider.send('eth_requestAccounts', []);

        // Check if the method exists on the provider
        if (typeof window.ethereum.request !== 'function') {
          alert('This functionality is not supported by your wallet');
          return;
        }

        // Add the token
        const wasAdded = await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: token.address,
              symbol: token.symbol,
              decimals: token.decimals,
              image: token.image,
            },
          },
        });

      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert('Please install an Ethereum-compatible browser or extension like MetaMask to use this functionality.');
    }
  };

  return <button 
  onClick={handleAddToken}
  className="bg-hallo connect_button w-[80%] mt-[1.5rem] h-[3rem] active:scale-90 transition ease-in-out">
  Add $CLAWS to Wallet
</button>;
}

export default AddToken;
