import React from "react";

export const NextArrow = (props) => {
//   const {className, style, onclick}=props;
    return (
        <>
        <div 
        className={props.className}
        style={{ ...props.style, backgroundColor: "black"}}
        onclick={props.onClick} />
        </>
    );

};

export const PrevArrow = (props) => {
    return (
        <>
        <div className={props.className}
        style={{ ...props.style, backgroundColor: "black"}}
        onclick={props.onClick} />
        </>
    );

};