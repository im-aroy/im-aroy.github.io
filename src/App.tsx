import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Controls } from './components/Controls'
import { ProgressBar } from './components/ProgressBar'
import { useShadAPI } from './hooks/useShadAPI';

function App() {
  
  const [authCode, setAuthCode] = useState<string|null>(null);
  const { start, pause, stop, i, l } = useShadAPI(authCode);

  return (
    <>
      <Controls
        onPlay={()=>start()}
        onPause={()=>pause()}
        onStop={()=>stop()}
        isLocked={!authCode}
      />
      <br />
      <ProgressBar progress={i/l} />
      <br />
      <button onClick={()=>setAuthCode(prompt('enter auth code please: '))}>enter code</button>
      <span>current code: {authCode}</span>
    </>
  )
}

export default App
