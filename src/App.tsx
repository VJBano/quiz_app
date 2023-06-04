import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Public_Routes from './routes/public_routes'
import Quiz_Board from './components/quiz_board'
import Multiple_Choice from './components/template/multiple_choice'
import { MultipleChoice } from './models/exam_types/multiple_choice_types'
import Quiz_Board_Right from './components/quiz_board_left'
import Dialog_box from './components/dialog_box'
import Dashboard from './components/dashboard'

function App() {

  const [isOpen, setIsOpen] = useState(false);

const handleClose = () => {
  setIsOpen(false);
};

const handleOk = () => {
  // Do something when OK button is clicked
};

  return (
    <div className="App ">
       {/* <Public_Routes/> */}
       {/* <Quiz_Board_Right/> */}
       {/* <Multiple_Choice data={sample} /> */}
       {/* <button onClick={() => setIsOpen(true)}>Open Modal</button>
    <Dialog_box  isOpen={isOpen} title="Example Modal" onClose={handleClose} onOk={handleOk}>
      <p>This is an example modal.</p>
    </Dialog_box> */}
    <Dashboard/>
    </div> 
  )
}

export default App
