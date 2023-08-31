import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { debounce } from 'lodash';
import { isMobileDevice } from './web/services/detect_mobile';

function App() {

  const [mobile, setMobile] = useState(false)
  
  return (
    <div className="App ">
     Project under maintenance...
    </div> 
  )
}

export default App
