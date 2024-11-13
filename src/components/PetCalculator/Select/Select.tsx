import { ChangeEvent } from "react";
import { capitalize } from "../../../utils/customize-strings";
import { Pet } from "../../../types/interfaces";

export default function Select({ id, labelText, pets, setSelectedPet }: {
    id: string,
    labelText: string,
    pets: string[],
    setSelectedPet: (newPet: Pet) => void,
}): JSX.Element {

    const handleChange = (newPet: Pet) => {
        setSelectedPet(newPet);
    }

    return (
        <div className="grid gap-2"
        >
            <label htmlFor={id} className="block">{labelText}</label>
            <select name={id} id={id} defaultValue={""} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange(e.target.value as Pet)}
                className="rounded-md">
                <option value="">-</option>
                {pets.map((pet, i) =>
                    <option key={i} value={pet}>{capitalize(pet)}</option>
                )}
            </select>
        </div>
    )
}