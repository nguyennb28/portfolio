import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// import './index.css'

import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Major from './pages/Major'
import Projects from './pages/Projects'




function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App
