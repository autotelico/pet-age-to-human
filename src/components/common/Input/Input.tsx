import { ChangeEvent } from "react";

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

    const labelClasses = [
        labelTextColor && `text-${labelTextColor}`
    ].filter(Boolean).join(' ');

    console.log(labelClasses)
    
    const inputClasses = [
        'rounded-md',
        'm-1',
        height && `h-[${height}px]`,
        width && `w-[${width}px]`,
        inputTextColor && `text-${inputTextColor}`,
    ].filter(Boolean).join(' ');

    const handleChange = (newValue: string | number) => {
        cb(newValue);
    }

    return (
        <div className='flex flex-col gap-1 justify-left'>
            <label htmlFor={inputId} className={labelClasses}>{labelText}</label>
                <input id={inputId} type={type} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(String(e.target.value))}
                    className={inputClasses} />
        </div>
    )
}