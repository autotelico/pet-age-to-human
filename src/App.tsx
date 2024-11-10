import { useState } from 'react'
import './styles/App.css'
import { Calculator } from './components/Calculator'

import { petOptions } from './logic/options'
import { Pet } from './logic/interfaces';

function App() {
  const [selectedPet, setSelectedPet] = useState<Pet | undefined>();

  return (
    <>
      <Calculator.Container>
        <>
        <h2>{selectedPet}</h2>
          <Calculator.PetSelector pets={petOptions} setSelectedPet={setSelectedPet}/>
          <Calculator.SubmitButton cb={() => alert(selectedPet)}/>
        </>
      </Calculator.Container>
    </>
  )
}

export default App
