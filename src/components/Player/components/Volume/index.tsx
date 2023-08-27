import { createSignal } from 'solid-js';

type VolumeProps = {
   volume: () => number;
   step?: number;
   onInput: (
      event: InputEvent & {
         currentTarget: HTMLInputElement;
         target: HTMLInputElement;
      }
   ) => void;
};

export const Volume = ({ volume, onInput, step = 1 }: VolumeProps) => {
   return (
      <input
         type="range"
         value={volume()}
         step={step}
         min={0}
         max={100}
         onInput={onInput}
      />
   );
};
