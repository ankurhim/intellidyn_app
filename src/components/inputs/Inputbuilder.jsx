import InputHook from "./InputHook"

const Inputbuilder = ({fields}) => {
    const { input, handleChange } = InputHook();
    return (
        <div>
            {fields.map((field,k) => (
                <span key={k}>
                <label className={field.name+"-label"} htmlFor={field.name}>{field.label}</label>
                <input
                className={field.name+"-input"}
                name={field.name}
                id={field.name}
                type={field.type}
                value={input.val}
                onChange={handleChange}
                />
                </span>
            ))}
        </div>
    )
}

export default Inputbuilder;