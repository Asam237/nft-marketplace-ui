import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button style={{background: '#e0eca8'}} className="px-10 py-3 rounded-full text-sm" {...props}>
            {children}
        </button>
    )
}
