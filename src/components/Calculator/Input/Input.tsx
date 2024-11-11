import { ChangeEvent, Dispatch, SetStateAction } from "react";

export default function Input({cb, type}: {
    cb: Dispatch<SetStateAction<string | undefined>>,
    type?: string,
}): JSX.Element {

    const handleChange = (newAge: string) => {
        cb(newAge);
    }
    
    return (
        <input type={type} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(String(e.target.value))} />
    )
}