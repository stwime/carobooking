import React, { useRef, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import PlayIcon from './svgs/play.jsx'
import PauseIcon from './svgs/pause.jsx'

const stopOtherAudioSources = () => {
  const audio_elements = document.getElementsByTagName("audio");
  for (let element of audio_elements){
    element.pause();
  }
}

export default function AudioPlayer({ src }) {
  const audioElement = useRef(null);
  const [currentPlayTime, setCurrentPlayTime] = useState(0);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
  const currentPlayTimeMinutes = Math.floor(currentPlayTime / 60);
  const currentPlayPercentage =
    (currentPlayTime / (audioElement.current &&
      audioElement.current.audioEl.current.duration)) * 100;
    
  let currentPlayTimeSeconds = Math.floor(currentPlayTime - currentPlayTimeMinutes).toString()
  if (currentPlayTimeSeconds.length === 1){
    currentPlayTimeSeconds = "0" + currentPlayTimeSeconds
  }

  return (
    <div className="w-full sm:w-96 h-16 my-2">
      <ReactAudioPlayer
        listenInterval={500}
        onListen={(e) => setCurrentPlayTime(e)}
        ref={audioElement}
        src={src}
      />
      <div className="flex items-center justify-center h-12 w-full bg-red-lightest">
        <div className="bg-white w-full shadow-md rounded-lg">
          <div className="flex justify-between items-center m-2">
            <div
              className="text-white p-3 rounded-full hover:shadow-lg cursor-pointer bg-white gradient shadow-md transition-all duration-100 "
              onClick={() =>{
                  if (currentlyPlaying){
                    audioElement.current &&
                    audioElement.current.audioEl.current.pause()
                    setCurrentlyPlaying(false);
                  }
                  else{
                    stopOtherAudioSources();
                    audioElement.current &&
                    audioElement.current.audioEl.current.play()
                    setCurrentlyPlaying(true);

                  }
              }
              }>
              {currentlyPlaying ? (
                     <PlayIcon /> 
              ) : 
                 <PauseIcon />
              }
            </div>
            <div className="w-full ml-4">
              <div className="h-2 border w-full rounded flex items-center">
              <div
                style={{ width: currentPlayPercentage + '%' }}
                className="h-2 gradient rounded-full relative bg-white shadow-md border"></div>
            </div>
            </div>
            <div className="flex justify-end text-sm mx-4 text-gray-500">
              <p>
                {currentPlayTimeMinutes}:
                {currentPlayTimeSeconds}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
