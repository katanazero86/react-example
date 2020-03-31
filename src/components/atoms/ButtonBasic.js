import React from 'react';
import '../../scss/atoms/ButtonBasic.scss';

function ButtonBasic({text, color, size, fullWidth, onClick}) {

    const handleClick = () => {
        if(onClick) {
            onClick();
        }

        return false;
    }

    return(
        <button 
        onClick={handleClick}
        className={
            `button-basic 
            ${color ? ` button-basic-${color}` : ``} 
            ${size ? ` button-basic-${size}` : ``}
            ${fullWidth ? ` button-basic-full-width` : ``}`
            .trim()
        }>{text}</button>
    )

}


export default ButtonBasic;