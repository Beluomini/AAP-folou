import { StyleSelect } from "./styledSelect";

function SelectCategory({ text, name, value, handleOnChange }) {

    const options = [
        { value: "FOOD", label: "Comida" },
        { value: 'TOY', label: "Brinquedo" },
        { value: 'CLOTHES', label: "Roupa" },
        { value: 'ACCESSORIES', label: "Acessórios" },
        { value: 'SERVICE', label: "Serviço" },
        { value: 'OTHER', label: "Outros" },
    ]

    return (
        <StyleSelect>
            <div className="form_control">
                <label htmlFor={name}>{text}</label>
                <select name={name} id={name} onChange={handleOnChange}>
                    <option>Categoria</option>
                    {options.length >= 0 &&
                        options.map((option) => (
                            <option value={option.value} key={option.value}>
                                {option.label}
                            </option>
                        ))}
                </select>
            </div>
        </StyleSelect>
    );
}

export default SelectCategory;