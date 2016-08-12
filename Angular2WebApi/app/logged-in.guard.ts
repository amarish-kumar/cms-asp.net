export function isLoggedin() {
    return !!localStorage.getItem('auth_token');
}