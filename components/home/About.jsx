const about = './assets/image/About/About_img.png';

const About = () => {
    return (
        <section id="About" className="flex flex-col py-24 gap-8">
            <h1 className="flex text-center justify-center text-6xl text-hallo font-display">
                Where Crypto Meets Horror
            </h1>
            <div className="flex flex-col md:flex-row justify-between px-4 py-10 items-center gap-8 md:gap-0">
                <div className="flex flex-1 justify-center items-center">
                    <img src={about} alt=""  className="w-[40rem] "/>
                </div>
        
                <p className="px-8  md:pr-20 leading-6 md:flex-1 text-justify md:text-xl md:text-left md:leading-7">
                <span className="text-hallo">Origins :</span><br /><br />
Nestled in the digital snowdrifts of the blockchain, Santa Claws Coin was born out of a late-night storytelling session about the legendary figure known as Evil Santa Claws. From stealing happiness to flying with dragons, the tales of this anti-Santa captured the imagination of a group of meme enthusiasts and developers. Deciding that the world of crypto needed a coin with a festive yet mischievous twist, Santa Claws Coin was minted.
<br /><br />   <span className="text-hallo">Vision :</span><br /><br />
Unlike other meme coins, Santa Claws Coin isn’t just for show! While its origin might be rooted in shadowy tales, the mission of Santa Claws Coin is crystal clear: to merge fun, fantasy, and finance in a way that no other meme coin has before.
                 </p>
            </div>
        </section>
    )
}

export default About;

