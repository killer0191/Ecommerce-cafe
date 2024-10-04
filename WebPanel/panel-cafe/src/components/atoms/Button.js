// src/components/atoms/Button.js
import '../../styles/buttons.sass';

const Button = ({ text, onClick, disabled, className = "button", visual = true }) => {
  if (!visual) {
    return null; // No renderizar nada si visual es false
  }

  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {text}
    </button>
  );
};

export default Button;
