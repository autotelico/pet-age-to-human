import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { capitalize } from "../../../utils/customize-strings";
import { Pet } from "../../../types/interfaces";

export default function Select({ pets, setSelectedPet }: {
    pets: string[],
    setSelectedPet: Dispatch<SetStateAction<Pet | undefined>>,
}): JSX.Element {

    const handleChange = (newPet: Pet) => {
        setSelectedPet(newPet);
    }

    return (
        <select name="species" id="species" defaultValue={""} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e.target.value as Pet)}
        className="rounded-md">
            <option value="">-</option>
            {pets.map((pet, i) =>
                <option key={i} value={pet}>{capitalize(pet)}</option>
            )}
        </select>
    )
}