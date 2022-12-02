
export function authHeader(){

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.acessToken){
       return{ "Authorization": user.acessToken}; 
    }else{
        return{};
    }

}
