import Image from "next/image";

const about = '/assets/image/About/refer.jpeg';

const Referal = () => {
    return (
        <>
            <section id="Refer-Earn">
                <div className="w-full flex flex-col gap-16 justify-center items-center mt-0 md:mt-10">
                    <div className="w-full flex mb-7 md:mb-20 font-display text-hallo text-5xl md:text-6xl justify-center">
                        Refer and Earn
                    </div>
                    <div className="w-full flex flex-col gap-8 md:flex-row justify-around items-center">
                        <div className=" w-1/2 flex justify-center">
                            <Image src={about} alt="" width={450} height={225} className=" rounded-md" />
                        </div>
                        <div className=" mt-5 md:mt-0 w-full md:w-1/2 flex justify-center md:justify-start">
                            <p className=" w-3/5 md:w-4/5 flex text-justify md:text-left leading-6 text-base md:text-2xl">

                        We offer a $50 reward in $CLAWS tokens for each successful referral you introduce who commits a minimum of $50 during the presale. These $CLAWS tokens will be airdropped post the conclusion of the presale. Each wallet is limited to a maximum of 10 referrals, and the total reward is capped at $500 per account.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Referal;
