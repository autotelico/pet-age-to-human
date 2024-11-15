export default function SubmitButton({text, cb}: {
    text?: string,
    cb: () => void,
}): JSX.Element {
    return (
        <button type="button" onClick={cb}
        className="bg-purple-500">{text || 'Submit'}</button>
    )
}