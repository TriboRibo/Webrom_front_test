import React, {useState} from 'react';

const Button = ({text, height, width, variant, iconPosition, icon: Icon, onClick, disabled}) => {

	const [isHovered, setIsHovered] = useState(false);

	const buttonStyles = {
		shop: {
			background: disabled ? '#E0E0E0' : '#FFFFFF',
			fontFamily: 'Open Sans',
			fontSize: '14px',
			fontWeight: 600,
			color: disabled ? '#A0A0A0' : '#151515',
			border: '1px solid #1F74B7',
			transition: '0.3s',
			cursor: disabled ? 'not-allowed' : 'pointer',
		},
		addProduct:{
			background: 'rgba(255, 255, 255, 0.3)',
			fontFamily: 'Open Sans',
			fontSize: '16px',
			fontWeight: 600,
			color: '#151515',
			border: '1px solid #FFFFFF',
			transition: '0.3s',
		},
		buyProduct: {
			background: '#1F74B7',
			fontFamily: 'Open Sans',
			fontSize: '14px',
			fontWeight: 600,
			color: '#FFFFFF',
		}
	}
	// Update text color when hovered
	const buttonStyle = {
		...buttonStyles[variant],
		color: isHovered && !disabled
			? variant === 'buyProduct' // Check if button have buyProduct
				? '#FFFFFF' : '#1F74B7' : buttonStyles[variant].color, // Change text color on hover
		height,
		width,
	};

	return (
		<>
			<button className='border rounded-btn flex items-center justify-center gap-1.5'
			        style={
				        buttonStyle
			        }
			        onMouseEnter={() => !disabled && setIsHovered(true)}
			        onMouseLeave={() => !disabled && setIsHovered(false)}
			        onClick={!disabled ? onClick : undefined}
			        disabled={disabled}
			>
				{iconPosition === 'left' && Icon && <Icon/>}
				{text}
				{iconPosition === 'right' && Icon && <Icon/>}
			</button>
		</>
	);
};

export default Button;