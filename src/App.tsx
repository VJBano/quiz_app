import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Router from './routes/Router';
import { ScreenDimensionProps } from './models/screen_types';
import { debounce } from 'lodash';
import { isMobileDevice } from './services/detect_mobile';

function App() {

  const [mobile, setMobile] = useState(false)

  const [screenSize, setScreenSize] = useState<ScreenDimensionProps>({width:window.innerWidth, height:window.innerHeight})

  useEffect(() => {

    const handleResize = debounce(() => {

      setScreenSize({height:window.innerHeight, width:window.innerWidth})
    },100)

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  useEffect(() => {

    setMobile(isMobileDevice())

  },[screenSize])
  
  return (
    <div className="App ">
      {mobile? <h1>Download the App. coming soon... </h1>: <Router/>}
    </div> 
  )
}

export default App
