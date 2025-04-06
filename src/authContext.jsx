// AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';


const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null); // in-memory storage

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
