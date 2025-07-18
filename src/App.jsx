import './App.css'
import Home from '../src/pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wallet from './components/Wallet';
import EnterArena from './pages/EnterArena'
import Manage from './pages/Manage'
import CreateAgent from './pages/CreateAgent'
import Watch from './pages/Watch'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Home/>} />
        <Route path="/Wallet" element={<Wallet />} />
        <Route path='/manage' element={<Manage/>} />
        <Route path='/watch' element={<Watch/>} />
        <Route path='/createAgent' element={<CreateAgent/>} />
        <Route path='/enterArena' element={<EnterArena/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
