import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import Body from './components/body/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
