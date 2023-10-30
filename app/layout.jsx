import '@/styles/global.css'


export const metadata = {
    title: "Santa Claws",
    description: "First Horror Crypto Meme Coin"
}

const RootLayout = ({children}) => {
  return (
    <html lang ="en">
        <body>
          
            <div className='main'>

            </div>
            <main>
            
                {children}

            </main>
            
        </body>

    </html>
  )
}

export default RootLayout