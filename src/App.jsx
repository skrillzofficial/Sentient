import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wallet from './components/Wallet';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Home/>} />
        <Route path="/Wallet" element={<Wallet />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
