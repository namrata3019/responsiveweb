import axios from "axios";

const url="https://brainzo.stackroute.io/authentication-service/api/v1/authenticate";
async function Authentication(data){

    return await axios.post(url,data) 
}

export default Authentication;