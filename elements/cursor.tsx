import { useEffect, useRef } from 'react';
import useStore from '@/useStore';
import useMouse from 'hooks/useMouse';

export default function Cursor () {
	const {cursor } = useStore();
	const mousePos = useMouse();
	const mouseRoundRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (mouseRoundRef.current) {
			const roundRefCurrnt = mouseRoundRef.current;

			const mouseX: number = mousePos.mouseX;
			const mouseY: number = mousePos.mouseY;

			roundRefCurrnt.style.transform = `translate3d(${mouseX + 5}px, ${mouseY + 5}px, 0)`;
		}
	})

	return (
		<div className={`cursor cursor-${cursor}`} ref={mouseRoundRef} />
	)
}
