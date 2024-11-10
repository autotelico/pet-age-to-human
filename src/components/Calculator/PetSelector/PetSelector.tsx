import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { capitalize } from "../../../logic/customize-strings";
import { Pet } from "../../../logic/interfaces";

export default function PetSelector({ pets, setSelectedPet }: {
    pets: string[],
    setSelectedPet: Dispatch<SetStateAction<Pet | undefined>>,
}): JSX.Element {

    const handleChange = (newPet: Pet) => {
        setSelectedPet(newPet);
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