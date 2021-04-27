function Input({ name, label, onChange, placeholder, type }) {
  return (
    <div>
      {label && <p>{label}</p>}
      <input
        name={name}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
