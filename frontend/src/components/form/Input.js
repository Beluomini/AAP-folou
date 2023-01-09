import { StyleInput } from "./styledInput";

function Input({ text, nome, type, value, placeholder, handleOnChange }) {

    return (
        <StyleInput>
            <div className="form_control">
                <label htmlFor={nome}>{text}</label>
                <input
                    type={type}
                    nome={nome}
                    id={nome}
                    value={value}
                    onChange={handleOnChange}
                    placeholder={placeholder}
                />
            </div>
        </StyleInput>
    );
}

export default Input;