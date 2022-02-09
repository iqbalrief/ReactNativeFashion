import { getValueFor } from "../Authentication/authService";
import {  CreateOrder } from "./OrderService";



import { createContext } from "react";

export const OrderContext = createContext({});

export const OrderContextProvider = ({ children }: any) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const AddToOrder = async (data:any) => {
    
    
    return new Promise<void>(async (resolve, reject) => {
      const aT = await getValueFor("AT")

     await CreateOrder(aT, data)
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  

  return (
    <OrderContext.Provider
      value={{
      AddToOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};



 

