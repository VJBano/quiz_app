import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Home_page from './pages/home_page'
import Add_quiz from './pages/add_quiz';
import Multiple_Choice from './components/multiple_choice';
import Router from './routes/Router';
import { ScreenDimensionProps } from './models/screen_types';
import { debounce } from 'lodash';

function App() {

  const [screenSize, setScreenSize] = useState<ScreenDimensionProps>({width:window.innerWidth, height:window.innerHeight})
  const [mobile, setMobile] = useState(false)

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

    if(screenSize.height < 700 || screenSize.width < 700 ){
          setMobile(true)
    } else {
          setMobile(false)
    }
  },[screenSize])
  
  return (
    <div className="App ">
      {mobile? <h1>Download the App </h1>: <Router/>}
    
    </div> 
  )
}

export default App
