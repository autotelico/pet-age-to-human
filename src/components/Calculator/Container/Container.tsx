export default function Container({children}: {
    children: JSX.Element
}): JSX.Element {
    return (
        <div id="calculator-container"
        className="bg-slate-200 p-4 rounded-md">
            {children}
        </div>
    )
}