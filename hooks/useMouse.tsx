import useStore from "@/useStore";
import { useEffect, useState } from "react";

export interface MousePosType {
    mouseX: number
    mouseY: number
}

const initMousePos = {
    mouseX: 0,
    mouseY: 0
}

export default function useMouse() {
    const { update } = useStore();
    const [mousePos, setMousePos] = useState<MousePosType>(initMousePos);

    useEffect(() => {
        const mouseEvent = (e: MouseEvent) => {
            setMousePos({
                mouseX: e.clientX,
                mouseY: e.clientY
            });
        }

        window.addEventListener('mousemove', mouseEvent);
        return () => window.removeEventListener('mousemove', mouseEvent);
    })

    return mousePos;
}