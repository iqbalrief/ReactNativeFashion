import { instance } from "../indexservice";

export const addCartRequest = (aT: any ,data: string) => {
    return new Promise<any>(async (resolve, reject) => {
        await instance.post('cart', data,
        {headers: { Authorization: `Bearer ${aT}` } }
        ).then((data: any) => {
            resolve(data)
        }).catch((error: any) => {
            reject(error)
        });

    })
}

export const cartAllRequest = (aT: any) => {
    return new Promise<any>(async (resolve, reject) => {
        
        await instance.get('cart/all',
        {headers: { Authorization: `Bearer ${aT}` } }
        ).then((data: any) => {
            resolve(data)
        }).catch((error: any) => {
            reject(error)
        });

    })
}

export const editCartRequest = (aT: any, id: any, data:any) => {
    console.log('cart', id);
    return new Promise<any>(async (resolve, reject) => {
        
        await instance.put(`cart/${id}`, data,
        {headers: { Authorization: `Bearer ${aT}` } }
        ).then((data: any) => {
            resolve(data)
        }).catch((error: any) => {
            reject(error)
        });

    })
}
