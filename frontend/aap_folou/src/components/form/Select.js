import { StyleSelect } from "./styledSelect";

function Select({ text, nome, value, handleOnChange, options }) {
    console.log(options, text, nome, value);
    return (
        <StyleSelect>
            <div className="form_control">
                <label htmlFor={nome}>{text}</label>
                <select name={nome} id={nome}>
                    <option>Selecione uma opção</option>
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