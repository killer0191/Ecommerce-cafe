// src/components/atoms/InputField.js
const InputField = ({ type, value, onChange, placeholder }) => (
    <input 
      type={type} 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      className="input-field" 
    />
  );
  
  export default InputField;
  

  