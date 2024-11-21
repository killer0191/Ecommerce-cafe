import React, { createContext, useState, useContext, ReactNode } from 'react'

type AuthContextTypes = {
  isAuthenticated: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

type User = {
  name: string;
};

const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

//Proveedor 
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (userData:User) => {
    setIsAuthenticated(true);
    setUser(userData);
  }
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usaddo dentro de AuthProvider');
  }
  return context;
};