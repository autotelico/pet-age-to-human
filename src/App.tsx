import { useState } from 'react'
import './styles/App.css'
import { Calculator } from './components/Calculator'

import { petOptions } from './logic/options'

function App() {

  return (
    <>
      <Calculator.Container>
        <>
          <Calculator.PetSelector petOptions={petOptions}/>
          <Calculator.SubmitButton cb={() => alert('cb!!')}/>
        </>
      </Calculator.Container>
    </>
  )
}

export default App
