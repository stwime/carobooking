import React, { useRef, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

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
    <div className="w-96 h-16 my-2">
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
                    audioElement.current &&
                    audioElement.current.audioEl.current.play()
                    setCurrentlyPlaying(true);

                  }
              }
              }>
              {currentlyPlaying ? (
                <svg
                  className="w-6 h-6 transition-all"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                </svg>
              ) : (
                <svg
                  className=" w-6 h-6"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-6 0 30 30">
                  <path d="M5,5 15,15 5,25z" />
                </svg>
              )}
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
