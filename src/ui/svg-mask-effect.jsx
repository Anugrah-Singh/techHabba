import React, { useRef, useEffect, useState } from "react";

const MOUSE_MOVE_EVENT = "mousemove";
const TOUCH_MOVE_EVENT = "touchmove";

export const MaskContainer = ({
	className = "",
	revealText,
	children,
}) => {
	const containerRef = useRef(null);
	const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const handleMouseMove = (event) => {
			const rect = container.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;
			setMaskPosition({ x, y });
		};

		const handleTouchMove = (event) => {
			if (!event.touches || event.touches.length === 0) return;
			const touch = event.touches[0];
			const rect = container.getBoundingClientRect();
			const x = touch.clientX - rect.left;
			const y = touch.clientY - rect.top;
			setMaskPosition({ x, y });
		};

		container.addEventListener(MOUSE_MOVE_EVENT, handleMouseMove);
		container.addEventListener(TOUCH_MOVE_EVENT, handleTouchMove);

		return () => {
			container.removeEventListener(MOUSE_MOVE_EVENT, handleMouseMove);
			container.removeEventListener(TOUCH_MOVE_EVENT, handleTouchMove);
		};
	}, []);

	const maskStyle = {
		WebkitMaskImage: `radial-gradient(180px at ${maskPosition.x}px ${maskPosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)`,
		maskImage: `radial-gradient(180px at ${maskPosition.x}px ${maskPosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)`,
	};

	return (
		<div
			ref={containerRef}
			className={`relative overflow-hidden ${className}`}
		>
			<div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 py-12">
				{children}
			</div>
			<div
				className="pointer-events-none absolute inset-0 bg-black text-white transition-opacity duration-300 ease-out"
				style={maskStyle}
			>
				<div className="flex h-full w-full items-center justify-center px-6 py-12">
					{revealText}
				</div>
			</div>
		</div>
	);
};

export default MaskContainer;
