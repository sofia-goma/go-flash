export default function getToken() {
   return localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');
}