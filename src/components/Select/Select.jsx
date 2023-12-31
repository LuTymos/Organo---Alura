import "./Select.css";

function Select({ Id, label, options, required, valueInput, setValueInput }) {
  const handleValue = (e) => {
    setValueInput(e.target.value);
  };
  return (
    <div className="Select">
      <label htmlFor={Id}>{label}</label>
      <select
        onChange={(e) => {
          handleValue(e);
        }}
        value={valueInput}
        required={required}
        id={Id}
      >
        <option value=""> Selecione uma opção</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
