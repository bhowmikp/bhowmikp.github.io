import { useState, useEffect, MutableRefObject } from 'react';

export const useOnScreen = <T extends Element>(
    ref: MutableRefObject<T>,
    rootMargin = '0px'
): [boolean, MutableRefObject<T> | undefined] => {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    useEffect(() => {
        if (!ref.current) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            { rootMargin }
        );

        const currentElement = ref.current;

        if (currentElement) {
            observer.observe(currentElement);
        }
        return () => {
            observer.unobserve(currentElement);
        };
    }, [ref, rootMargin, isIntersecting]);

    return [isIntersecting, ref];
};

export default useOnScreen;
