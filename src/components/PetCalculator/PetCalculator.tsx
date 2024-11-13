import { useState } from "react";
import Container from "../common/Container/Container";
import Input from "../common/Input/Input";
import Select from "./Select/Select";
import SubmitButton from "../common/SubmitButton/SubmitButton";
import { getHumanAge } from "../../utils/get-ages";
import { petOptions } from "../../constants/options";
import { Pet } from "../../types/interfaces";


export default function Calculator(): React.ReactNode {
    const [selectedPet, setSelectedPet] = useState<Pet | undefined>();
    const [petAge, setPetAge] = useState<string | undefined>();
    const [resultAge, setResultAge] = useState<string | undefined>();

    const handlePetChange = (newPet: Pet): void => {
        setResultAge(undefined);
        setSelectedPet(newPet);
    }

    const displayResultAge = () => {
        if (petAge) {
            const resultAge = getHumanAge(Number(petAge!), selectedPet!);
            setResultAge(resultAge.toFixed(0));
        }
    }
    return (
        <>
            <Container id="calculator-container">
                <>
                    <div>
                        <Select id="select-pet" labelText="Select your pet" pets={petOptions} setSelectedPet={handlePetChange} />
                    </div>
                    <div>
                        <Input labelText='Pet age' inputId='pet-age' cb={setPetAge} type='number' labelTextColor='slate-500' inputTextColor='white' />
                    </div>
                    <SubmitButton cb={displayResultAge} />
                </>
            </Container>
            {resultAge &&
                <h3 id="result" className="text-center">{`Your ${selectedPet} is ${resultAge} years old in human years.`}</h3>
            }
        </>
    )
}