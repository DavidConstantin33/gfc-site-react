import { useState } from "react";

export default function About() {
    const images = [
        { src: "/media/img1.png", alt: "Antrenament MMA" },
        { src: "/media/img2.png", alt: "Luptători în ring" },
        { src: "/media/img3.png", alt: "Echipa Gedo Fight Club" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section id="about">
            <h2>Despre Noi</h2>
            <p className="about-description">
                Gedo Fight Club este locul unde pasiunea pentru MMA se întâlnește cu performanța. Ne antrenăm pentru excelență și dezvoltăm campioni!
            </p>
            <div className="slider">
                <button onClick={prevSlide} className="slider-button">‹</button>
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="slider-image"
                />
                <button onClick={nextSlide} className="slider-button">›</button>
            </div>
        </section>
    );
}