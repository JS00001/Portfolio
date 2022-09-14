import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const sizeClassNames = {
	small: 'px-6 py-1 rounded',
	medium: 'px-16 py-3 rounded',
	large: 'px-20 py-4 rounded',
};

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	size?: keyof typeof sizeClassNames;
};

const Button: React.FC<ButtonProps> = ({ children, className = '', size = 'large', ...props }) => {
	return (
		<button
			className={`flex items-center justify-center hover:bg-primaryhover focus:ring-4 focus:ring-blue-200 ${className} ${sizeClassNames[size]} bg-primary font-semibold text-white`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
