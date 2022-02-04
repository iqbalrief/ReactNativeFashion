import { createContext } from "react";
import { productsRequest } from "./productsService";


export const ProductsContext = createContext({});

export const ProductsContextProvider = ({ children }: any) => {


  const getAllProducts = () => {
    return new Promise<void>(async (resolve, reject) => {
      await productsRequest()
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };


  return (
    <ProductsContext.Provider
      value={{
        getAllProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};