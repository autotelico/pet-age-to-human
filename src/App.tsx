import { useState } from 'react'
import './styles/App.css'
import { Calculator } from './components/Calculator'

import { petOptions } from './logic/options'
import { Pet } from './logic/interfaces';
import { getHumanAge } from './logic/get-ages';

function App() {
  const [selectedPet, setSelectedPet] = useState<Pet | undefined>();
  const [petAge, setPetAge] = useState<string | undefined>();
  const [resultAge, setResultAge] = useState<string | undefined>();

  const displayResultAge = () => {
    if (petAge) {
      const resultAge = getHumanAge(Number(petAge!), selectedPet!);
      setResultAge(resultAge.toFixed(0));
    }
  }

  return (
    <>
      <Calculator.Container>
        <>
          {resultAge &&
            <h3>{`Your ${selectedPet} is ${resultAge} years old in human years.`}</h3>
          }
          <Calculator.PetSelector pets={petOptions} setSelectedPet={setSelectedPet} />
          <Calculator.Input labelText='Pet age' inputId='pet-age' cb={setPetAge} type='number' width={1000} labelTextColor='black' inputTextColor='white' />
          <Calculator.SubmitButton cb={displayResultAge} />
        </>
      </Calculator.Container>
    </>
  )
}

export default App
