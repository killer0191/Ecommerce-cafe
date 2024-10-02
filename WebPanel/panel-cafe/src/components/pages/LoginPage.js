// src/components/pages/LoginPage.js
import Login from '../organisms/Login';
import { loginUser } from '../../services/authService';
import '../../styles/login.sass';


const LoginPage = () => {
  const handleLogin = async (credentials) => {
    try {
      const user = await loginUser(credentials);
      console.log('User authenticated:', user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return <Login onLogin={handleLogin} />;
};

export default LoginPage;
