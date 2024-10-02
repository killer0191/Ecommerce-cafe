  // src/components/atoms/Button.js
  const Button = ({ text, onClick, disabled }) => (
    <button onClick={onClick} disabled={disabled} className="button">
      {text}
    </button>
  );
  
  export default Button;