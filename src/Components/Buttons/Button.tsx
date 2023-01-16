import React, { FC } from "react"
type ButtonProps = {
    className: any;
    text: string;
    id?: string;
    onClick?: () =>  void;
};

const Button: FC<ButtonProps> = ({className, text, id, onClick}) =>{
    return(
        <button id={id} onClick={onClick} className={className} >
           {text}
        </button>
    );
};

export default Button