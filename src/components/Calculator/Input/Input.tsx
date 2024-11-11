import { ChangeEvent, Dispatch, SetStateAction } from "react";

export default function Input({ inputId, labelText, cb, labelTextColor, inputTextColor, type, height, width }: {
    inputId: string,
    labelText: string,
    cb: (...args: any) => any,
    labelTextColor?: string,
    inputTextColor?: string,
    type?: string,
    height?: number,
    width?: number,
}): JSX.Element {

    const handleChange = (newAge: string) => {
        cb(newAge);
    }

    return (
        <div className={`${labelTextColor ? `text-${labelTextColor}` : ''}`}>

            <label htmlFor={inputId}>{labelText}
                <input id={inputId} type={type} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(String(e.target.value))}
                    className={`rounded-md m-1 
                    ${height ? `h-[${height}px]` : ''} 
                    ${width ? `w-[${width}px]` : ''}
                    ${inputTextColor ? `text-${inputTextColor}` : ''}
                    `} />
            </label>
        </div>
    )
}