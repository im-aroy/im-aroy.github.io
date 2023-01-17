import { useEffect, useState } from "react";

interface IControls {
  isLocked: boolean;
  onPlay(): void;
  onPause(): void;
  onStop(): void;
}

export const Controls = ({onPlay, onPause, onStop, isLocked} : IControls) => {
  const [state, setState] = useState<'playing'|'paused'|'stopped'>('paused');

  useEffect(()=>{
    switch(state) {
      case 'playing': onPlay();break;
      case 'paused': onPause();break;
      case 'stopped': onStop();break;
    }
  }, [state]);


  return (
    <>
      <button onClick={()=>setState('playing')} disabled={state==="playing" || isLocked}>start</button>
      <button onClick={()=>setState('paused')} disabled={state==="paused" || state==="stopped" || isLocked}>pause</button>
      <button onClick={()=>setState('stopped')} disabled={state==="stopped" || isLocked}>stop</button>
    </>
  )
}