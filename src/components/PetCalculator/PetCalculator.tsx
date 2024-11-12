import { useState } from "react";
import Container from "../common/Container/Container";
import Label from "../common/Label/Label";
import Input from "../common/Input/Input";
import Select from "../common/Select/Select";
import SubmitButton from "../common/SubmitButton/SubmitButton";
import { getHumanAge } from "../../utils/get-ages";
import { petOptions } from "../../logic/options";
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
        <Container>
            <>
                {resultAge &&
                    <h3>{`Your ${selectedPet} is ${resultAge} years old in human years.`}</h3>
                }
                <Label id="select-pet" labelText='Select your pet' labelTextColor='black' />
                <Select pets={petOptions} setSelectedPet={setSelectedPet} />
                <Input labelText='Pet age' inputId='pet-age' cb={setPetAge} type='number' width={1000} labelTextColor='black' inputTextColor='white' />
                <SubmitButton cb={displayResultAge} />
            </>
        </Container>
    )
}