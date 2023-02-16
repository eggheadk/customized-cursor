import Image from 'next/image'
import useMouse from 'hooks/useMouse';
import { useEffect, useRef } from 'react';

export default function Home() {
	const mousePos = useMouse();
	const mouseRoundRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (mouseRoundRef.current) {
			const roundRefCurrnt = mouseRoundRef.current;

			const mouseX: number = mousePos.mouseX;
			const mouseY: number = mousePos.mouseY;

			roundRefCurrnt.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
		}
	})

	return (
		<div className="cursor rounded" ref={mouseRoundRef}>
			<Image src="/assets/cursor.png" alt='cursor' sizes="100vw" style={{ width: '30px', height: 'auto' }} width={0} height={0} />
		</div>
	)
}
