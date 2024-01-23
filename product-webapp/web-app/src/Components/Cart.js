import React from "react";
import "./cart.css";
import { useEffect, useState } from "react";
import courseimg from "../HomePage/Images/react.jpg";
import { deleteCart, getCartDetails, updateCart } from "../Service/CartService";
import { createOrder, updateOrder } from "../Service/PaymentService";
import { Link, useNavigate } from "react-router-dom";
import { addLearner } from "../Service/CourseService";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EmptyCart from "../Images/emptyCart.jpg"
import { IconButton } from "@mui/material";
function Cart() {
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(0);
  const [total , setTotal ] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    // const learnerEmailId = localStorage.getItem('user')
    if (cart.length == 0 && counter < 1) {
      const learnerEmailId = localStorage.getItem("user");
      getCartDetails(learnerEmailId)
        .then((resp) => {
          console.log("post details");
          console.log(resp.data[0].ListOfCourses);
          setCart(resp.data[0].ListOfCourses);
          setCounter(counter+1);
          let price = total;
          resp.data[0].ListOfCourses.forEach(({courseFee}) => {
            price += courseFee;
          })
          setTotal(price)
        })
        .catch((e) => console.error(e));
    }
  }, [cart, total , counter]);
  console.log(cart);
  return (
<>
    <div className="cartbody">
      <h1>Your Cart</h1>
      <div className="shopping-cart">
        <div className="column-labels">
          <label className="course-image">Image</label>
          <label className="course-details">Course Name</label>
          {Boolean(total) && <label className="course-price">Price</label> }
          <label className="course-removal">Remove</label>
        </div>
        {cart.length > 0 &&
          cart.map((course) => (
            <div className="course">
              <div className="course-image">
                <img src={`data:image/png;base64,${course.courseImage}`} />
              </div>
              <div className="course-details">
                <div className="course-title">{course.courseName} </div>
                <p className="course-description">{course.description}</p>
              </div>
              <div className="course-price">{course.courseFee}</div>
              <div className="course-removal">
                <IconButton className="remove-course" onClick={(e) => {
                  const learnerEmailId = localStorage.getItem("user");
                  const courseId=  course.courseId
                  deleteCart(learnerEmailId , courseId).then((resp) => {
                    setTotal(0);
                    getCartDetails(learnerEmailId)
        .then((resp) => {
          console.log("post details");
          console.log(resp.data[0].ListOfCourses);
          setCart(resp.data[0].ListOfCourses);
        })
        .catch((e) => console.error(e));
                  })
                }}><DeleteOutlineIcon />
                </IconButton>
              </div>
            </div>
          ))}
          {total > 0 && <>
            <div className="totals">
                <div className="totals-item">
                  <label>Total</label>
                  <div className="totals-value" id="cart-subtotal">
                    {total}
                  </div>
                </div>
              </div>
              <button className="checkout" onClick={(e) => {

    if(total > 0){let payment = JSON.stringify({ mentorEmailId: cart[0].mentorEmailId,
      learnerEmailId: localStorage.getItem("user"),
      courseId: cart[0].courseId,
      courseName: cart[0].courseName,
      coursePrice:total
    });
      let file = new File([cart[0].courseImage], "File name",{ type: "image/jpg" });
      const formData = new FormData();  
      formData.append("payment",payment);
      formData.append("file", file);
      createOrder(formData).then((response) => {
      var options = {
        "key": "rzp_test_VSXaldpnOyIKkN", 
        "amount": total, 
        "currency": "INR",
        "name": cart[0].courseName,
        "description": cart[0].description.substring(1,20),
        
        "order_id": response.data.orderId,
        "prefill": {
            "name": "Gaurav Kumar",
            "email": localStorage.getItem("user"),
            "contact": "1234567890"
        },
        "notes": {
            "address": "Braizno Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        },
        "modal":{
          "confirm_close" : true,
          "animation":true
    
        },
        "retry":{
          enabled:true,
          max_count:4
        },
        "timeout":300,
        "handler":(resp) => {
          const {razorpay_order_id:orderId, razorpay_payment_id:paymentId } = resp;
          updateOrder({orderId,paymentId}).then(async (resp) => {
            for(let i = 0 ; i < cart.length ; i++){
              await addLearner({
                learnerEmailId : localStorage.getItem("user"),
              }, cart[i].courseId)
            }

            updateCart(localStorage.getItem("user"), {ListOfCourses : []})
            navigate("/mycourse")
          })
        },
        "error":(resp) => {
          console.log("error ", resp)
        },
    };
    let rzp1 = window.Razorpay(options);
    rzp1.open();
    e.preventDefault();
    rzp1.on('payment.failed', function (response){
      console.log('payment.failed',response.error)
      
  })
    });
  } 
   }}
   >Checkout</button>
          </>
          }
          </div>
    </div>
    {
            cart.length == 0 && <div style={
              {display:"flex" , flexDirection:"column",alignItems:"center"}
            }>
              <img src={EmptyCart} style={{height:500 , width:500}}>
              </img>
              <Link to="/courses"><button className="checkout">Courses</button></Link>
            </div>
      }
  </>
  );
}
export default Cart;
