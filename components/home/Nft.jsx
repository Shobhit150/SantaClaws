import React, { useEffect, useRef } from 'react';
import "@/styles/Nft.css";
import "@/styles/material.css";

const nftImages = [
    './assets/image/Nft/bg-NFT1.png',
    './assets/image/Nft/NFT2.png',
    './assets/image/Nft/NFT3.png',
    './assets/image/Nft/NFT4.png',
    './assets/image/Nft/NFT5.png',
];

const bgImages = [
    './assets/image/Nft/bg-1.png',
    './assets/image/Nft/bg-2.png',
    './assets/image/Nft/bg-3.png',
    './assets/image/Nft/bg-4.png',
    './assets/image/Nft/bg-5.png',
];

const Nft = () => {
    const carouselRef = useRef(null);

    const changeBg = (bg) => {
        const banner = document.querySelector('.banner .banner-bg');
        banner.style.backgroundImage = `url("${bg}")`;
        banner.style.backgroundSize = 'cover';
        banner.style.backgroundPosition = 'center';
    };

    const handleItemClicked = (index) => {
        changeBg(bgImages[index]);
    };

    useEffect(() => {
        if (!carouselRef.current) return;

        let M;
        const clickHandlers = [];

        import('materialize-css/dist/js/materialize.min.js')
            .then(materialize => {
                M = materialize.default;

                const options = {
                    duration: 200,
                    dist: -100,
                    shift: 0,
                    padding: 0,
                    numVisible: 5,
                    fullWidth: false,
                    indicators: false,
                    noWrap: false,
                    onCycleTo: null
                };

                M.Carousel.init(carouselRef.current, options);

                const carouselItems = carouselRef.current.querySelectorAll('.carousel-item');
                carouselItems.forEach((item, index) => {
                    const clickHandler = () => handleItemClicked(index);
                    clickHandlers.push(clickHandler);
                    item.addEventListener('click', clickHandler);
                });

                return () => {
                    carouselItems.forEach((item, index) => {
                        item.removeEventListener('click', clickHandlers[index]);
                    });

                    const instance = M.Carousel.getInstance(carouselRef.current);
                    instance && instance.destroy();
                };
            });
    }, []);

    return (
        <section className=''>
            <div className='flex justify-center text-6xl font-display text-hallo pt-20 pb-10'>
                $CLAWS NFT
            </div>
            <div id='Nft' className="banner md:py-0 md:px-24">
                <div className="banner-bg"></div>
                <div className="carousel-box flex-col md:flex-row">
                    <div className="nft-dis">
                        <div className="nft__data">
                            {/* <h2 className="nft__title font-display">NFT</h2> */}
                            <p className="nft__description text-2xl">
                                Five unique <span className='font-bold text-orange-300'>$CLAWS</span> to be airdropped on 5 lucky wallets after the presale ends.
                            </p>
                        </div>
                    </div>
                    <div className="carousel" ref={carouselRef}>
                        {nftImages.map((src, index) => (
                            <div key={index} className="carousel-item">
                                <img src={src} alt={`NFT ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Nft;
