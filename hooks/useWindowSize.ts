import { useState, useEffect } from 'react';
import { isBrowser } from '@Utils/isBrowser';

export const useWindowSize = (): { screenWidth: number; screenHeight: number } => {
    const [windowSize, setWindowSize] = useState({
        screenWidth: undefined,
        screenHeight: undefined
    });

    useEffect(() => {
        if (isBrowser()) {
            const handleResize = () => {
                setWindowSize({
                    screenWidth: window.innerWidth,
                    screenHeight: window.innerHeight
                });
            };

            window.addEventListener('resize', handleResize);

            handleResize();

            return () => window.removeEventListener('resize', handleResize);
        }
        return null;
    }, []);

    return windowSize;
};

export default useWindowSize;
