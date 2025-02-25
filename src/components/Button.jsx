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
			transition: '0.2s',
			cursor: disabled ? 'not-allowed' : 'pointer',
		},
	}
	// Update text color when hovered
	const buttonStyle = {
		...buttonStyles[variant],
		color: isHovered && !disabled ? '#1F74B7' : buttonStyles[variant].color, // Change text color on hover
		height,
		width,
	};

	return (
		<>
			<button className='border rounded-btn flex items-center justify-center gap-1.5 hover:accent-yellow-300'
			        style={
				        buttonStyle
				        // height,
				        // width,
				        // backgroundColor: currentStyle.background,
				        // fontFamily: currentStyle.fontFamily,
				        // fontSize: currentStyle.fontSize,
				        // fontWeight: currentStyle.fontWeight,
				        // color: currentStyle.color,
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