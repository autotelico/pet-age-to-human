import { ChangeEvent, Dispatch, SetStateAction } from "react";

export default function Input({cb, type}: {
    cb: Dispatch<SetStateAction<number | undefined>>,
    type?: string,
}): JSX.Element {

    const handleChange = (newAge: number) => {
        cb(newAge);
    }
    
    return (
        <input type={type} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(Number(e.target.value))} />
    )
}