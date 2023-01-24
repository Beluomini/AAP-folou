import { StyleSelect } from "./styledSelect";

function SelectStatus({ text, nome, value, handleOnChange }) {
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
                <label htmlFor={nome}>{text}</label>
                <select name={nome} id={nome} onChange={handleOnChange}>
                    <option>Status</option>
                    {options?.map((option) => (
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