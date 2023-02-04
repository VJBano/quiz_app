import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Public_Routes from './routes/public_routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
       <Public_Routes/>
    </div>
  )
}

export default App
