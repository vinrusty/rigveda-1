import React,{useEffect, useRef, useState} from 'react';
import img from '../../assets/images/background/img-newletter.png'
import AudioPlayer from 'react-h5-audio-player'

export const Newsletters = ({mandalam, aadhyayaa, audioSource, setAudioSource, aad, audioRef}) => {
  return (
    <section className="new-letter">
        <div className="container">
            <div className="new-letter-inner flex">
            <div
                className = 'audio-player'
                >
                <AudioPlayer
                    src={audioSource > 9 ? `/assets/audios/${mandalam}/${aadhyayaa}/0${audioSource}E.mp3` : `/assets/audios/${mandalam}/${aad}/00${audioSource}E.mp3`}
                    ref={audioRef}
                    className='player'
                    autoPlay
                    onEnded={() => {
                        setAudioSource(audioSource+1);
                    }}
                    onClickNext={() => {
                        setAudioSource(audioSource+1);
                    }}
                    onClickPrevious={() => {
                        setAudioSource(audioSource-1);
                    }}
                />
            </div>
        </div>
    </div>
    </section>
    );
};

export default Newsletters;