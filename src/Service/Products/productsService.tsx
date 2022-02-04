import { instance } from "../indexservice";

export const productsRequest = () => {
    return new Promise<any>(async (resolve, reject) => {
        
        await instance.get('products',
        ).then((data: any) => {
            resolve(data)
        }).catch((err: any) => {
            reject(err)
        });
    })
}