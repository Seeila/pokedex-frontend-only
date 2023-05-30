import { useState, useEffect } from 'react'
import { useWindowSize } from "usehooks-ts";


export const useIsMobile = () => {
    const { width, height} = useWindowSize();
    const [isMobile, setIsMobile] = useState<boolean>(width < 1024);

    useEffect(() => {
        if(width < 1024) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [width]);

    return {
        width,
        height,
        isMobile
    }
};