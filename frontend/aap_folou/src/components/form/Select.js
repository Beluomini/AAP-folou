import { StyleSelect } from "./styledSelect";

function Select({ text, nome, value, handleOnChange, options }) {
    return (
        <StyleSelect>
            <div className="form_control">
                <label htmlFor={nome}>{text}</label>
                <select name={nome} id={nome}>
                    <option>Abrir Seleção</option>
                    {options?.map((option) => (
                        <option value={option.id} key={option.id}>
                            {option.nome}
                        </option>
                    ))}
                </select>
            </div>
        </StyleSelect>
    );
}

export default Select;