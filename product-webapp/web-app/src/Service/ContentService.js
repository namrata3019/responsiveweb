import axios from "axios";

export const addContent = async (contendId, videoTitle) => {
    console.log(contendId , videoTitle)
    return await axios.put(`https://brainzo.stackroute.io/content-service/brainzo/content/updateVideo?contentId=${contendId}&videoTitle=${videoTitle}`);
}