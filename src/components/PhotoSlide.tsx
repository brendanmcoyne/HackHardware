import styled from "styled-components";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1500px;
    margin: 4rem auto;
    overflow: visible;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CarouselTrack = styled(motion.div)`
    display: flex;
    gap: 2rem;
    will-change: transform;
`;

const CarouselImage = styled(motion.img)`
    width: 450px;
    max-width: 90vw;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
    flex-shrink: 0;
    cursor: pointer;
    transition: transform 0.3s ease, filter 0.3s ease;
    transform-origin: center center;

    &:hover {
        transform: scale(1.05);
        filter: drop-shadow(0px 0px 20px rgba(0, 123, 255, 0.5));
    }
`;

const ArrowButton = styled.button<{ left?: boolean }>`
    position: absolute;
    top: 50%;
    ${({ left }) => (left ? "left: 125px;" : "right: 125px;")}
    transform: translateY(-50%);
    background: #999999;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 60px;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s ease;

    &:hover {
        background-color: #888888;
    }

    @media (max-width: 768px) {
        ${({ left }) => (left ? "left: 10px;" : "right: 10px;")}
        width: 35px;
        height: 50px;
        font-size: 1.2rem;
    }
`;

interface PhotoSlideProps {
    images: string[];
    imagesPerSlide?: number;
}

export default function PhotoSlide({ images, imagesPerSlide = 2 }: PhotoSlideProps) {
    const [slideIndex, setSlideIndex] = useState(0);
    const [perSlide, setPerSlide] = useState(imagesPerSlide);

    // Dynamically adjust images per slide for mobile
    useEffect(() => {
        const updatePerSlide = () => {
            setPerSlide(window.innerWidth <= 768 ? 1 : imagesPerSlide);
        };
        updatePerSlide();
        window.addEventListener("resize", updatePerSlide);
        return () => window.removeEventListener("resize", updatePerSlide);
    }, [imagesPerSlide]);

    const totalSlides = Math.ceil(images.length / perSlide);

    const next = () => setSlideIndex((prev) => (prev + 1) % totalSlides);
    const prev = () => setSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

    const currentImages = images.slice(
        slideIndex * perSlide,
        slideIndex * perSlide + perSlide
    );

    return (
        <CarouselContainer>
            <ArrowButton left onClick={prev}>
                &lt;
            </ArrowButton>
            <ArrowButton onClick={next}>
                &gt;
            </ArrowButton>

            <AnimatePresence initial={false}>
                <CarouselTrack
                    // Remove key={slideIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                >
                    {currentImages.map((src, i) => (
                        <CarouselImage
                            key={i}
                            src={src}
                            alt={`Project ${slideIndex * perSlide + i + 1}`}
                        />
                    ))}
                </CarouselTrack>
            </AnimatePresence>
        </CarouselContainer>
    );
}
