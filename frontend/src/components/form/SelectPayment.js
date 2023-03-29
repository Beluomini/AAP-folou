import { StyleSelect } from "./styledSelect";

function SelectPayment({ text, name, value, handleOnChange }) {
    const options = [
        { value: "CREDIT_CARD", label: "Cartão de Crédito" },
        { value: 'DEBIT_CARD', label: "Cartão de Débito" },
        { value: 'PIX', label: "PIX" },
    ]

    return (
        <StyleSelect>
            <div className="form_control">
                <label htmlFor={name}>{text}</label>
                <select name={name} id={name} onChange={handleOnChange}>
                    <option>Métodos de Pagamento</option>
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

export default SelectPayment;