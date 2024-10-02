import LoginForm from '../molecules/LoginForms';
import '../../styles/login.sass';
import { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Activar el estado de carga para mostrar el alert

    try {
      await onLogin({ email, password }); // Realiza la acción de login
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false); // Restablece el estado de carga una vez completado
    }
  };

  return (
    <div className="login-organism">
      <h1>Login</h1>
      <LoginForm
        email={email}
        password={password}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onSubmit={handleSubmit}
        loading={loading} // Pasar el estado de carga
      />
    </div>
  );
};

export default Login;
