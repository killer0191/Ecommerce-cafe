// src/components/molecules/LoginForm.js
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import '../../styles/login.sass';


const LoginForm = ({ email, password, onEmailChange, onPasswordChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="login-form">
    <InputField type="email" value={email} onChange={onEmailChange} placeholder="Email" />
    <InputField type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
    <Button text="Login" />
  </form>
);

export default LoginForm;
