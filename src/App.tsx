import { useState } from 'react'
import './styles/App.css'
import { Calculator } from './components/Calculator'

import { petOptions } from './logic/options'
import { Pet } from './logic/interfaces';
import { getHumanAge } from './logic/get-ages';

function App() {
  const [selectedPet, setSelectedPet] = useState<Pet | undefined>();
  const [petAge, setPetAge] = useState<number | undefined>();
  const [resultAge, setResultAge] = useState<number | undefined>();

  const displayResultAge = () => {
    const resultAge = getHumanAge(petAge!, selectedPet!);
    setResultAge(Number(resultAge.toFixed(0)));
  }

  return (
    <>
      <Calculator.Container>
        <>
          <h2>{selectedPet}</h2>
          {resultAge &&
            <h3>{`Your pet is ${resultAge} years old in human years.`}</h3>
          }
          <Calculator.PetSelector pets={petOptions} setSelectedPet={setSelectedPet} />
          <Calculator.Input cb={setPetAge} />
          <Calculator.SubmitButton cb={displayResultAge} />
        </>
      </Calculator.Container>
    </>
  )
}

export default App
