import { useState, useEffect } from "react";

interface UseCarouselProps {
    totalImages: number;
    interval?: number;
}

export const useCarousel = ({
    totalImages,
    interval = 5000,
}: UseCarouselProps) => {
    // starting from image 0
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        // every 5s move to next image
        // thanks to modulo operation looping through images 
        // using the same division remainder for each image from 0 to totalImages-1
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % totalImages);
        }, interval);

        return () => clearInterval(timer);
    }, [totalImages, interval]);

    return currentImage;
};