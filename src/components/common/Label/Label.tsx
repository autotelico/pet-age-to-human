function Label({ id, labelText, labelTextColor }: {
    id: string,
    labelText: string,
    labelTextColor: string,
}): React.ReactNode {
    return (
        <label htmlFor={id} style={{ color: labelTextColor }}>
            {labelText}
        </label>
    )
}

export default Label;