import React, { useState } from 'react';
import IconButton from "./IconButton";
import ErrorMessage from "./ErrorMessage";

interface IDefaultTextFieldProps {
    errorMessage: string;
    iconAlt: string;
    iconPath: string; 
    onIconClick: React.MouseEventHandler<HTMLButtonElement>;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string;
    isError: boolean;
    id: string;
}

export default function DefaultTextField({
    errorMessage,
    iconAlt, 
    iconPath,
    onIconClick,
    placeholder,
    onChange,
    value,
    isError,
    id,
}: IDefaultTextFieldProps) {
    const [isFocus, setIsFocus] = useState(false);
    const borderColor = isFocus 
    ? `border-[#333]` 
    :  !value 
    ? `border-[#f0f0f0]` 
    : `border-[#333]`;
    return (
        <div className='relative'>
        <div
         onFocus={() => setIsFocus(true)}
         onBlur={() => setIsFocus(false)}
         className={`
        text-[#333]
        border-b
        ${borderColor}`}>
            <input 
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type="text"
                className="outline-none"
            />
            {!!value && (
                <IconButton
                onClick={onIconClick}
                alt={iconAlt}
                iconPath={iconPath}
            />
            )}
        </div>
        {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
    );
}
