import { instance } from "../indexservice";
import * as SecureStore from 'expo-secure-store';


export const SignupRequest = (data: string) => {
    // console.log(data)
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

export const save = async (key: string, value: string): Promise<any> => {
    await SecureStore.setItemAsync(key, value)
}

export const getValueFor = async (key: string): Promise<any> => {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        return result
    } else {
        alert('No values stored under that key.');
    }
}

export const deleteValueFor = async (key: string): Promise<any> => {
    await SecureStore.deleteItemAsync(key)
}
