import React, { useEffect, useState } from "react";

import firebase from "firebase";
import { auth } from "@firebase/firebase";

// Defining the values AuthContext returns
type AuthContextValues = {
  user: RoleUser | null,
  login: (provider: firebase.auth.AuthProvider) => Promise<firebase.auth.UserCredential>,
  logout: () => Promise<void>,
  loading: boolean
}

export type RoleUser  = firebase.User & {
  isAdmin: boolean
}

// AuthContext instance
export const AuthContext = React.createContext<AuthContextValues>({} as AuthContextValues);

// Provider of the AuthContext
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<RoleUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      user?.getIdToken(true);

      let roleUser: RoleUser | null = user as RoleUser;

      if(roleUser) {
        let idTokenResult = await roleUser.getIdTokenResult();
        
        if(roleUser !== null)
          roleUser.isAdmin = idTokenResult.claims.admin;
      }

      setUser(roleUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = (provider: firebase.auth.AuthProvider) => auth.signInWithPopup(provider);
  const logout = () => auth.signOut();

  return (
    <AuthContext.Provider value={ { user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};