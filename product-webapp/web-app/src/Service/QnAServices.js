import axios from "axios";

export const fetchAllComment =  (courseId) => {
    return axios.get(`https://brainzo.stackroute.io/qna-service/api/v1/brainzo/qna/allComments/${courseId}`);
}

export const postComment=(data)=>{
    return axios.post("https://brainzo.stackroute.io/qna-service/api/v1/brainzo/qna/addcomment",data);
}
export const replyComment=(commentId,data)=>{
    return axios.patch(`https://brainzo.stackroute.io/qna-service/api/v1/brainzo/qna/reply/${commentId}`,data)
}

export const getUser = (emailId) => {
    return axios.get(`https://brainzo.stackroute.io/user-service/api/brainzo/v1/${emailId}`);

}