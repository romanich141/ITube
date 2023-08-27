import track from '../../assets/jaymes-young-infinity.mp3';
import { createSignal, createEffect, onMount } from 'solid-js';
import { Volume } from './components/Volume';
import { useVolume } from './components/Volume/hooks/useVolume';

export const Player = () => {
   // const [audio, setAudio] = createSignal<HTMLAudioElement | null>(track);
   const { volume, handleInputVolume } = useVolume({ defaultVolume: 5 });
   let ref: HTMLAudioElement | undefined;

   // createEffect(() => {
   //    const audioElement = new Audio(track)
   //    // console.dir(audioElement)
   //    setAudio(audioElement)
   // })

   createEffect(() => {
      const track = ref;
      console.log(volume());
      if (track !== null) {
         track.volume = volume() / 100;
      }
   });

   return (
      <div>
         <audio ref={ref} src={track}></audio>
         <button
            onClick={() => {
               const track = ref;

               if (track !== null) {
                  track.play();
               }
            }}
         >
            Play
         </button>
         <button
            onClick={() => {
               const track = ref;
               if (track !== null) {
                  track.pause();
               }
            }}
         >
            Pause
         </button>
         <Volume volume={volume} onInput={handleInputVolume} />
         <div>{volume()}</div>
      </div>
   );
};
