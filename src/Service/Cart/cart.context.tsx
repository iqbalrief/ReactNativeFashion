import { createContext, useState } from "react";
import { getValueFor } from "../Authentication/authService";
import { addCartRequest, cartAllRequest } from "./cart.Service";


export const CartContext = createContext({});

export const CartContextProvider = ({ children }: any) => {
 

  const AddToCart = (data: any) => {
    console.log(data)
    
    return new Promise<void>(async (resolve, reject) => {
      const aT = await getValueFor("AT")

      addCartRequest(aT, data)
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const cartAll = (data: any) => {
    console.log(data)
    
    return new Promise<void>(async (resolve, reject) => {
      const aT = await getValueFor("AT")

      cartAllRequest(aT)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

 

  

  return (
    <CartContext.Provider
      value={{
        AddToCart,
        cartAll
      }}
    >
      {children}
    </CartContext.Provider>
  );
};