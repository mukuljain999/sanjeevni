export function isAuthenticated(){
    return getToken() ? true:false;
}
export function getToken(){
    return localStorage.getItem("token");
}
export function getEmail(){
    return localStorage.getItem("email");
}
export function logout(){
    localStorage.removeItem("token");
}
