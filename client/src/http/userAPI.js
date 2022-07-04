import { $host, $authHost } from "./index.js";
import jwt_decode from 'jwt-decode';

export const registration = async(id, name, password) => {
    const {data} = await $host.post('api/user/register', {id, name, password, categories: '', score: 0, role: 'Пользователь'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async(id, password) => {
    const {data} = await $host.post('api/user/login', {id, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

//export const check = async() => {
//    const {data} = await $authHost.get('api/user/auth') //authHost.get
//    localStorage.setItem('token', data.token)
//    return jwt_decode(data.token)
//}

export const updateUser = async() => {
    const storageToken = localStorage.getItem('token');
    console.log(storageToken)
    const {id} = jwt_decode(storageToken);
    console.log(id)
    const {data} = await $host.post('api/user/updateUser', {id})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const generalUsersScore = async() => {
    const usersScore = await $host.get('api/user/generalUsersScore');
    return usersScore.data;
}