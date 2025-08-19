import React from "react";
import "./button.module.scss"

interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secundary" | "outline";
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn ${variant}`}
            disabled={disabled}>
            {label}
        </button>
    )
}

export default Button;