import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AdminPage from './components/pages/AdminPage';
import LoginPage from './components/pages/LoginPage';
import UserPage from './components/pages/UserPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const isAuthenticated = false; // Aquí puedes verificar si el usuario está autenticado (cookie, token, etc.)

  return (
    <Router>
      <Routes>
        {/* Redirige la ruta raíz al login si no está autenticado */}
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />
        
        {/* Rutas públicas */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas protegidas */}
        <Route 
          path="/home" 
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route 
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
         <Route 
          path="/usuarios"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
