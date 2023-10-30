import { ConnectWallet, useAddress } from "@thirdweb-dev/react"
import {useWalletAddress} from '@/components/store/useWalletAddress'
import { useEffect, useState} from "react"


const Wallet3 = () => {

    
    const address = useAddress()
    const setWallAdd = useWalletAddress(state => state.setWalletAddress)

    useEffect(() => {
        if(address){
          setWallAdd(address)
          
        }
      }, [address])

     

  return (
    <div className="flex justify-center items-center gap-3 z-10 ">
    <ConnectWallet 
      modalSize={"compact"}
      switchToActiveChain={true}
      modalTitleIconUrl={""}
      className="wallet"
     />
     
     </div>
  )
}

export default Wallet3