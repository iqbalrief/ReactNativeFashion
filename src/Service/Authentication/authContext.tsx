import { createContext, useState } from "react";
import { save, SigninRequest, SignupRequest } from "./authService";


export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }: any) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signUp = (data: any) => {
    
    return new Promise<void>(async (resolve, reject) => {
      const dataSignup = JSON.stringify({
        email: data.email,
        password: data.password,
        retypedPassword: data.retypedPassword
      });

      SignupRequest(dataSignup)
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const signIn = (data: any) => {
    return new Promise<void>(async (resolve, reject) => {
      const dataSignin = JSON.stringify({
        email: data.email,
        password: data.password,
      });
      SigninRequest(dataSignin)
        .then(async (data: any) => {
          // console.log(data.data)
          await save("AT", data.data.access_token);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};