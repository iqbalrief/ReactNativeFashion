import { instance } from "../indexservice";

export const CreateOrder = (aT: any, data:any) => {
    // console.log(data)
    return new Promise<any>(async (resolve, reject) => {

        await instance.post('order',
        ).then((data: any) => {
            resolve(data)
        }).catch((err: any) => {
            reject(err)
        });

    })
}