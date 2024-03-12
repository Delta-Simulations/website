import { type FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type T_NavButtonProps = {
	text: string;
	to: string;
};

export const NavButton: FC<T_NavButtonProps> = (
	props: T_NavButtonProps
): JSX.Element => {
	const navigate = useNavigate();
	const location = useLocation();

	const isActive = location.pathname === props.to;

	const handleClick = () => {
		navigate(props.to);
	};

	return (
		<button
			className={` ${isActive ? 'font-bold' : 'font-normal'}`}
			onClick={handleClick}
		>
			{props.text}
		</button>
	);
};
