import { useEffect, useRef, useState } from "react";

type Props = {
    initialVisibility: boolean;
};

export function useClickOutside({ initialVisibility }: Props) {
    const [isShow, setIsShow] = useState(initialVisibility);

    const ref = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            setIsShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    return { ref, isShow, setIsShow };
}
