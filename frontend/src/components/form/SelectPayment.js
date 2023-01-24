import { StyleSelect } from "./styledSelect";

function SelectPayment({ text, nome, value, handleOnChange }) {
    const options = [
        { value: "CREDIT_CARD", label: "Cartão de Crédito" },
        { value: 'DEBIT_CARD', label: "Cartão de Débito" },
        { value: 'PIX', label: "PIX" },
    ]
    return (
        <StyleSelect>
            <div className="form_control">
                <label htmlFor={nome}>{text}</label>
                <select name={nome} id={nome} onChange={handleOnChange}>
                    <option>Métodos de Pagamento</option>
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

export default SelectPayment;