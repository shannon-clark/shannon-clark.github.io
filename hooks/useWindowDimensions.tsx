// https://dev.to/adrien/creating-a-custom-react-hook-to-get-the-window-s-dimensions-in-next-js-135k
import { useEffect, useState } from 'react';

type Dimensions = {
    width: number | undefined;
    height: number | undefined;
    isDesktop: boolean | undefined;
};

const useWindowDimensions = (): Dimensions => {
    const [windowDimensions, setWindowDimensions] = useState<Dimensions>({
        width: undefined,
        height: undefined,
        isDesktop: undefined,
    });
    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
                isDesktop:  window.innerWidth > 500
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowDimensions;
};

export default useWindowDimensions;
