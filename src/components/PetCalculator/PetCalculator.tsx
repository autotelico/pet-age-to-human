import { useState } from "react";
import Container from "../common/Container/Container";
import Input from "../common/Input/Input";
import Select from "../common/Select/Select";
import SubmitButton from "../common/SubmitButton/SubmitButton";
import { getHumanAge } from "../../utils/get-ages";
import { petOptions } from "../../constants/options";
import { Pet } from "../../types/interfaces";


export default function Calculator(): React.ReactNode {
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
            {resultAge &&
                <h3>{`Your ${selectedPet} is ${resultAge} years old in human years.`}</h3>
            }
            <Container id="calculator-container">
                <>
                    <div>
                        <Select id="select-pet" labelText="Select your pet" pets={petOptions} setSelectedPet={setSelectedPet} />
                    </div>
                    <div>
                        <Input labelText='Pet age' inputId='pet-age' cb={setPetAge} type='number' labelTextColor='slate-500' inputTextColor='white' />
                    </div>
                    <SubmitButton cb={displayResultAge} />
                </>
            </Container>
        </>
    )
}