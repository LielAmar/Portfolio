import React, { useEffect, useState } from "react";

import app from "@firebase/firebase";
import { getAuth, signInWithPopup, onAuthStateChanged, AuthProvider, User, UserCredential } from "firebase/auth";

app;
const auth = getAuth();


// Defining the values AuthContext returns
type AuthContextValues = {
  user: RoleUser | null,
  login: (provider: AuthProvider) => Promise<UserCredential>,
  logout: () => Promise<void>,
  loading: boolean
}

export type RoleUser  = User & {
  isAdmin: boolean
}

// AuthContext instance
export const AuthContext = React.createContext<AuthContextValues>({} as AuthContextValues);

export const useAuthContext = () => React.useContext(AuthContext);


// Provider of the AuthContext
export const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<RoleUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      user?.getIdToken(true);

      let roleUser: RoleUser | null = user as RoleUser;

      if(roleUser) {
        let idTokenResult = await roleUser.getIdTokenResult(true);

        if(roleUser !== null)
          roleUser.isAdmin = (idTokenResult && idTokenResult.claims && idTokenResult.claims["admin"] && (idTokenResult.claims as any).admin === true) ? true : false;
      }

      setUser(roleUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = (provider: AuthProvider) => signInWithPopup(auth, provider);
  const logout = () => auth.signOut();

  return (
    <AuthContext.Provider value={ { user, login, logout, loading } }>
      {children}
    </AuthContext.Provider>
  );
};