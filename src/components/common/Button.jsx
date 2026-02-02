import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/components.css';

const Button = ({ 
    children, 
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    fullWidth = false,
    loading = false,
    disabled = false,
    onClick,
    className = '',
    type = 'button',
    ...props
}) => {
    const baseClasses = 'btn';
    const variantClasses = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        outline: 'btn-outline',
        text: 'btn-text'
    };
    const sizeClasses = {
        sm: 'text-sm px-4 py-2',
        md: 'px-6 py-3',
        lg: 'text-lg px-8 py-4'
    };
    const widthClass = fullWidth ? 'btn-block' : '';
    const loadingClass = loading ? 'btn-loading' : '';
    const disabledClass = disabled ? 'btn-disabled' : '';
    
    const classes = [
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        widthClass,
        loadingClass,
        disabledClass,
        className
    ].filter(Boolean).join(' ');
    
    return (
        <button
            className={classes}
            onClick={onClick}
            type={type}
            disabled={disabled || loading}
            aria-busy={loading}
            {...props}
        >
            {icon && iconPosition === 'left' && <i className={`${icon} mr-2`} />}
            {loading ? <span className="opacity-0">{children}</span> : children}
            {icon && iconPosition === 'right' && <i className={`${icon} ml-2`} />}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    icon: PropTypes.string,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    fullWidth: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;