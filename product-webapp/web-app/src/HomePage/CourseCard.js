import React from "react";

const CourseCard = (props) => {
  const { imgUrl,title,} = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
        </div> 
      </div>
    </div>
  );
};

export default CourseCard;