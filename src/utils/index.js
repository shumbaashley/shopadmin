
const token = localStorage.getItem('user-token')

const isAuthenticated = () => {
    if(token){
        return true; 
    } else {
        return false;
    }

}

export default isAuthenticated