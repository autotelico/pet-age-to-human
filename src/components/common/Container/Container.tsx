// rewrite this container so that it has 3 divs inside of it, where 3 different components are going to be placed
export default function Container({id, children }: {
    children: JSX.Element
    id?: string,
}): JSX.Element {
    const divClasses = ['flex', 'flex-col', "gap-2", "bg-slate-500", "p-4", "rounded-md", 
        'items-center', 'justify-center', 'mx-auto',
        'w-[300px]',
        'sm:w-[500px]'
    ].filter(Boolean).join(' ');
    // console.log(`w-[${width}px]`);
    

    return (
        <div id={id}
            className={divClasses}>
            {children}
        </div>
    )
}