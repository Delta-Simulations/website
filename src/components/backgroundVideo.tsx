import React, { ReactNode, useRef } from 'react';

type T_BackgroundVideoProps = {
	videoSource: string;
	children: ReactNode;
	playbackSpeed: number;
};

const BackgroundVideo: React.FC<T_BackgroundVideoProps> = ({
	videoSource,
	children,
	playbackSpeed,
}) => {
	const videoRef = useRef<HTMLVideoElement>(null);

	React.useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = playbackSpeed;
		}
	}, [playbackSpeed]);

	return (
		<div className="relative w-full h-full overflow-hidden">
			<video
				ref={videoRef}
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover"
			>
				<source src={videoSource} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="absolute top-0 left-0 w-full h-full  bg-black/80"></div>
			<div className="relative z-10">{children}</div>
		</div>
	);
};

export default BackgroundVideo;
