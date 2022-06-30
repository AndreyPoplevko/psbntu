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

export const check = async() => {
    const {data} = await $authHost.get('api/user/auth') //authHost.get
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}