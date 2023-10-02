import React from 'react'
import Banderas from './components/Banderas'
import {Main} from './contexts/Main'
import "./App.css"
import Info from './components/Info'

const App = () => {

  return (
    <div className='App'>
      <Main>
        <Banderas />  
        <Info />  
      </Main>
    </div>
  )
}

export default App
