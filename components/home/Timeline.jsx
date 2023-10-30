import React from 'react'
import '@/styles/Timeline.css'

const stages = [
    {
        image: './assets/image/Timeline/roadmap.png',
        title: 'Phase 1',
        description: 'The Haunting Begins',
        tasks: [
            'Set goals and outcomes for presale.',
            'Design tokenomics for presale.',
            'Research crypto landscape and competitors.'
        ]
    },
    {
        image: './assets/image/Timeline/roadmap2.png',
        title: 'Phase 2',
        description: 'Summoning Rituals & Presale Hexes',
        tasks: [
            'Define token\'s name, logo, representation.',
            'Create landing page.',
            'Execute presale.',
            'Remaining presale and marketing tokens will be Burned',
        ]
    },
    {
        image: './assets/image/Timeline/roadmap3.png',
        title: 'Phase 3',
        description: 'DEX Descent into Darkness',
        tasks: [
            'Partner with popular DEX platforms.',
            'Provide liquidity. LP Tokens will be burned',
            'Announce airdrops and listing details.',
        ]
    },
    {
        image: './assets/image/Timeline/roadmap4.png',
        title: 'Phase 4',
        description: 'CEX\'s Cursed Chambers',
        tasks: [
            'Collaborate with CEX for promotions.',
            'Listing on Tier 1,2,3 CEX\'s',
            'Update and engage community.'
        ]
    }
];

const Timeline = () => {
    return (
        <>
            <section id='Roadmap' className="w-full">
                <div className='w-full flex flex-col overflow-hidden'>
                    <h1 className='w-full flex justify-center text-hallo font-display text-[3rem] md:text-[4.2rem] mt-[4rem] mb-[3rem] md:mt-[0rem]'>
                        Roadmap
                    </h1>
                    <div className='w-full h-[20rem] md:h-[30rem] items-center flex flex-row justify-around md:gap-x-[1.5rem] gap-x-[5px] text-xs md:text-base'>
                        {stages.map((stage, index) => (
                            <div key={index} className='tl-item w-full h-full hover:w-[220%] md:hover:w-[170%] transition-width skew-x-[-6deg] md:skew-x-[-10deg]'>
                                <img src={stage.image} alt="" className='tl_bg opacity-40' />
                                <div className='stage_name flex justify-center items-center h-full text-base md:text-2xl'>
                                    {stage.title}
                                </div>
                                <div>

                                    <div className='stage_desc pt-4 pr-4 pl-6 pb-6 text-center md:leading-9 md:p-10 underline-offset-0'>
                                        {stage.description}
                                    </div>
                                    <div className='flex justify-center'>
                                        <div className="stage_desc max-w-[75%] text-center">
                                            <ul style={{ listStyleType: 'disc' }} className="!text-[10px] md:!text-lg text-left space-y-2">
                                                {stage.tasks.map((task, taskIndex) => (
                                                    <li key={taskIndex}>{task}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Timeline;
