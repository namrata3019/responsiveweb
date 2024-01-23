import axios from "axios"

export const createOrder = (formData) => {
    return axios({
        method: "post",
        url: "https://brainzo.stackroute.io/payment-service/brainzo/payment",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
}

export const updateOrder = (data) => {
    return axios.put("https://brainzo.stackroute.io/payment-service/brainzo/payment/update" , data)
}