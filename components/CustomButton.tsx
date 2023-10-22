import React from 'react'
import Image from 'next/image';

type CustomButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string
}

const CustomButton = ({type,title,icon,variant}: CustomButtonProps) => {
  return (
    <button
        type={type}
        className={`flexCenter gap-3 rounded-full border ${variant}`} >
        {icon && 
            <Image 
                src={icon}
                alt={title}
                width={24}
                height={24} />}
        <label>{title}</label>
    </button>
  )
}

export default CustomButton