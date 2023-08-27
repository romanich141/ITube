import { createSignal } from 'solid-js';

type Props = {
    defaultVolume?: number
 }

export const useVolume = ({defaultVolume = 10}: Props) => {
    const [volume, setVolume] = createSignal(defaultVolume)

    const handleInputVolume = (event: InputEvent & {
        currentTarget: HTMLInputElement;
        target: HTMLInputElement;
    }) => {
        setVolume(Number(event.target.value))
     }

     return {
        volume,
        handleInputVolume,
     }
}