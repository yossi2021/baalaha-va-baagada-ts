export const TOKEN_KEY ='token';

export const setToken = (token: string)=> {
    localStorage.setItem(TOKEN_KEY, token);
}

export const getToken = (): string => {
    return localStorage.getItem(TOKEN_KEY) || '';
}