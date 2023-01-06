import { StyleInput } from "./styledInput";

function Input(props) {
    const { text, name, type, value, handleOnChange, placeholder } = props;
    return (
        <StyleInput>
            <div className="form_control">
                <label htmlFor={name}>{text}</label>
                <input
                    type={type}
                    name={name}
                    id={name}
                    value={value}
                    onChange={handleOnChange}
                    placeholder={placeholder}
                />
            </div>
        </StyleInput>
    );
}

export default Input;