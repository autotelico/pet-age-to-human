export default function Container({children}: {
    children: JSX.Element
}): JSX.Element {
    return (
        <div id="calculator-container">
            {children}
        </div>
    )
}