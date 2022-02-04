import { instance } from "../indexservice";


export const SignupRequest = (data: string) => {
    console.log(data)
    return new Promise<any>(async (resolve, reject) => {

        await instance.post('auth/local/signup', data
        ).then((data: any) => {
            resolve(data)
        }).catch((err: any) => {
            reject(err)
        });

    })
}

export const SigninRequest = (data: string) => {
    return new Promise<any>(async (resolve, reject) => {

        await instance.post('auth/local/signin', data
        ).then((data: any) => {
            resolve(data)
        }).catch((err: any) => {
            reject(err)
        });

    })
}

