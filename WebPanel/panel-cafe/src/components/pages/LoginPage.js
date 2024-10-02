import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos el hook useNavigate
import Login from '../organisms/Login';
import { loginUser } from '../../services/authService';
import '../../styles/login.sass';
import AlertOK from '../atoms/AlertOK';
import AlertError from '../atoms/AlertError'; // Importar el modal de error

const LoginPage = () => {
  const [showAlertOK, setShowAlertOK] = useState(false); // Estado para mostrar alerta de éxito
  const [showAlertError, setShowAlertError] = useState(false); // Estado para mostrar alerta de error
  const [loading, setLoading] = useState(false); // Estado para la alerta de carga
  const navigate = useNavigate(); // Hook para la redirección

  const handleLogin = async (credentials) => {
    setLoading(true); // Mostrar la alerta de carga

    try {
      const user = await loginUser(credentials);
      if (user === true) {
        console.log("bandera 1");
        setLoading(false); // Ocultar la alerta de carga
        setShowAlertOK(true); // Mostrar la alerta de éxito si el login es correcto

        // Redirigir a HomePage después de que se muestre la alerta
        setTimeout(() => {
          navigate('/home'); // Redirige a la ruta de la página de inicio
        }, 1500); // Esperamos 1.5 segundos, que es el tiempo de duración del alert OK
      } else {
        setLoading(false); // Ocultar la alerta de carga
        setShowAlertError(true); // Mostrar alerta de error si el login no es exitoso
      }
    } catch (error) {
      console.error('Login failed:', error);
      setLoading(false); // Ocultar la alerta de carga
      setShowAlertError(true); // Mostrar alerta de error en caso de excepción
    }
  };

  const handleCloseAlertOK = () => {
    setShowAlertOK(false); // Ocultar alerta de éxito
  };

  const handleCloseAlertError = () => {
    setShowAlertError(false); // Ocultar alerta de error
  };

  return (
    <div>
      <Login onLogin={handleLogin} loading={loading} />
      {/* Mostrar alerta de éxito si `showAlertOK` es true */}
      {showAlertOK && (
        <AlertOK label="Inicio de sesión confirmado" onClose={handleCloseAlertOK} />
      )}
      {/* Mostrar alerta de error si `showAlertError` es true */}
      {showAlertError && (
        <AlertError label="Error en el inicio de sesión" onClose={handleCloseAlertError} />
      )}
    </div>
  );
};

export default LoginPage;
