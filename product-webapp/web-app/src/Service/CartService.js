import axios from "axios";
export const addCart =  (data) => {
    return axios.post(`https://brainzo.stackroute.io/cart-service/api/v1/addCart` , data);
}
export const updateCart=(learnerEmailId, data)=>{
    return axios.put(`https://brainzo.stackroute.io/cart-service/api/v1/updateCart/${learnerEmailId}`, data);
}
export const getCartDetails=(learnerEmailId)=>{
    return axios.get(`https://brainzo.stackroute.io/cart-service/api/v1/getCartDetails/${learnerEmailId}`)
}
export const deleteCart = (learnerEmailId, courseId) => {
    return axios.delete(`https://brainzo.stackroute.io/cart-service/api/v1/deleteCart/${learnerEmailId}/${courseId}`);
}