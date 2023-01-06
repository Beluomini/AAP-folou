import { StyleSelect } from "./styledSelect";

function Select(props) {
    const { text, name, value, handleOnChange, options } = props;
    return (
        <StyleSelect>
            <div className="form_control">
                <label htmlFor={name}>{text}</label>
                <select name={name} id={name}>
                    <option>Selecione uma opção</option>
                </select>
            </div>
        </StyleSelect>
    );
}

export default Select;