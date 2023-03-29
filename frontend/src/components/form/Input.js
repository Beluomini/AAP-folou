import { StyleInput } from "./styledInput";

function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        <StyleInput>
            <div className="form_control">
                <label htmlFor={name}>{text}</label>
                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                    value={value}
                />
            </div>
        </StyleInput>
    );
}

export default Input;