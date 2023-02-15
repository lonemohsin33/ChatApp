import { useState } from 'react'

import './App.css'
import { ColorModeSwitcher } from './CMS';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <ColorModeSwitcher />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </Router>
  );
}

export default App
