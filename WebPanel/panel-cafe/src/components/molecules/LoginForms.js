import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import AlertLoad from '../atoms/AlertLoad';
import '../../styles/login.sass';
import '../../styles/buttons.sass';

const LoginForm = ({ email, password, onEmailChange, onPasswordChange, onSubmit, loading }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    onSubmit(event); // Ejecutar la función pasada desde el componente padre
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <InputField type="email" value={email} onChange={onEmailChange} placeholder="Email" requerid={true} />
      <InputField type="password" value={password} onChange={onPasswordChange} placeholder="Password" requerid={true} />
      <Button text="Login" type="submit" className='button-login' /> {/* Usamos type="submit" para el botón */}

      {/* Mostrar el alert solo si `loading` es true */}
      {loading && <AlertLoad label="Comprobando credenciales..." />} 
    </form>
  );
};

export default LoginForm;
