import { StyleSelect } from "./styledSelect";

function SelectStatus({ text, name, value, handleOnChange }) {
    const options = [
        { value: "SENT", label: "Enviado" },
        { value: 'VISUALIZED', label: "Visualizado" },
        { value: 'PROCESSING', label: "Processando" },
        { value: 'CANCELED', label: "Cancelado" },
        { value: 'FINISHED', label: "Finalizado" },
    ]

    return (
        <StyleSelect>
            <div className="form_control">
                <label htmlFor={name}>{text}</label>
                <select name={name} id={name} onChange={handleOnChange}>
                    <option>Status</option>
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

export default SelectStatus;