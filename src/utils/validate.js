export const checkValidData = (email , password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+]{8,}$/.test(password);


    if(!isEmailValid) return "Email ID is not valid";
    if(!isPassword) return "Password is not valid";

    return null;

}


export const checkValidName = (name) => {
    if(name.length <= 3){
        return "Name should be more than 3 characters"
    }

    return null;
}