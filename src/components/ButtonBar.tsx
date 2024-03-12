import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';

type T_ButtonBarProps = {
	buttons: JSX.Element[];
	logo: JSX.Element;
};

export const ButtonBar: FC<T_ButtonBarProps> = ({ buttons, logo }) => {
	const navigate = useNavigate();

	return (
		<div className="flex justify-around">
			<div
				className="flex items-center"
				onClick={() => {
					navigate('/');
				}}
			>
				{logo}
			</div>
			<div className="flex items-center">{buttons}</div>
		</div>
	);
};
