import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { capitalize } from "../../../logic/customize-options";
import { Pet } from "../../../logic/interfaces";

export default function PetSelector({ pets, setSelectedPet }: {
    pets: string[],
    setSelectedPet: Dispatch<SetStateAction<Pet | undefined>>,
}): JSX.Element {

    const handleChange = (newPet: Pet) => {
        setSelectedPet(newPet);
        console.log(newPet);
    }

    return (
        <select name="species" id="species" defaultValue={""} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e.target.value as Pet)}>
            <option value="">-</option>
            {pets.map((pet, i) =>
                <option key={i} value={pet}>{capitalize(pet)}</option>
            )}
        </select>
    )
}