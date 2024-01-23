import axios from "axios";

export const fetchUser = (emailId) => {
    return axios.get(`https://brainzo.stackroute.io/user-service/api/brainzo/v1/getUserDetails/${emailId}`)
}
export const editUser = async (emailId,userData) => {
  return await axios.put(`https://brainzo.stackroute.io/user-service/api/brainzo/v1/updateUserDetail/${emailId}`, userData);
};