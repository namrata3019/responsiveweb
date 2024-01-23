import axios from "axios";



var config={
    headers:{'Access-Control-Allow-Origin':'*'}
}

const url="http://localhost:9000/api/brainzo/v1/signup";
async function Register(data){
try {
  

    const resp=await axios.post(url,data,config)

return resp.data;
} catch (error) {
    console.log(error);
}
    
}

export default Register;