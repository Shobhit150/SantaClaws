// components/AudioButton.js

import { useState, useRef } from 'react';
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';



const AudioButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

  


    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            
            <button onClick={handlePlayPause} className="p-[7px] bg-hallo shadow-md mt-4 rounded-md hover:bg-opacity-70 active:scale-90 transition ease-in-out">
                    {isPlaying?<HiSpeakerWave size={25}/> 
              :
                   <HiSpeakerXMark size={25}/>    }      
            </button>
          
                   
            <audio ref={audioRef} src="/assets/music/music.mp3" preload="metadata" />
        </div>
    );
};

export default AudioButton;
