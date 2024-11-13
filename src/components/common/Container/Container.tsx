// rewrite this container so that it has 3 divs inside of it, where 3 different components are going to be placed
export default function Container({children}: {
    children: JSX.Element
}): JSX.Element {
    return (
        <div id="calculator-container"
        className="flex flex-col gap-2 bg-slate-500 p-4 rounded-md">
            {children}
        </div>
    )
}