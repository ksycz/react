import React from 'react';
import styles from "./Button.module.scss";

// ...props is for other props that can be defined later, for example, onClick
const Button = ({ children, href, secondary, ...props }) => {
    // we need a fragment and ternary operator to create condition

    const buttonClass = secondary ? styles.secondary : styles.button;

    return (
        <>
            { href ? (
                <a 
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className={buttonClass}>
                    {children}
                </a>
            ) : (
                <button className={buttonClass} {...props}>
                    {children}
                </button>
                )
            }
        </>
    )
    
};

export default Button;