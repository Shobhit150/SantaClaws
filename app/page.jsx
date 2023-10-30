"use client"
import { ThirdwebProvider, metamaskWallet, trustWallet, walletConnect} from "@thirdweb-dev/react"
import Navbar from "@/components/home/Navbar"
import Home from "@/components/home/Home"
import '@/styles/Navbar.css'
import Marquee from "@/components/home/Marquee"
import About from "@/components/home/About"
import Timeline from "@/components/home/Timeline"
import Nft from "@/components/home/Nft"
import Graph from "@/components/home/Graph"
import Footer from "@/components/home/Footer"
import Referal from "@/components/home/Referal"
import Tutorial from "@/components/home/Tutorial"


const App = () => {
  

  return (
    <ThirdwebProvider supportedWallets={[metamaskWallet(), walletConnect(), trustWallet()]}
    activeChain="binance" clientId={process.env.NEXT_PUBLIC_CLIENT_ID_THIRD}>
     
        <div className="cursor overflow-hidden">
            <Navbar />

          <Home />
          <Marquee />
          <About />
          <Timeline />
          <Nft />
          <Graph />
          <Tutorial/>
          <Referal/>
          <Footer />
          
        </div>
     
    </ThirdwebProvider>



    

  )
}

export default App;