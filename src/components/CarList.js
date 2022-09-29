import React from "react";

const CarList = (props) => {
    return (
        <div className="blog-post">
            <img className="car-img" src={`${props.carList.imgUrl}`} alt="car"/>
            <div className="car-make">{props.carList.make} {props.carList.model} ${props.carList.price}</div>
            <div className="blogPost">{props.carList.blogpost}</div>
        </div>
    )
}

export default CarList;