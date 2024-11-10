import React from "react";
import { capitalize } from "../../../logic/customize-options";

export default function PetSelector({petOptions: pets}: {
    petOptions: string[]
}): JSX.Element {
    return (
        <select name="species" id="species" defaultValue={""}>
            <option value="">-</option>
            {pets.map((pet, i) =>
                <option key={i} value={pet}>{capitalize(pet)}</option>
            )}
        </select>
    )
}