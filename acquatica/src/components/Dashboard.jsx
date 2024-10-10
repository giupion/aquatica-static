import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './waves.css';

export default function Dashboard() {
    const sailboatImages = [
        { webformatURL: '/sailboat1.jpg', tags: 'Barca a vela 1' },
        { webformatURL: '/sailboat2.webp', tags: 'Barca a vela 2' },
        { webformatURL: '/sailboat3.jpg', tags: 'Barca a vela 3' },
    ];

    const inflatableImages = [
        { webformatURL: '/inflatable1.jpg', tags: 'Gommone 1' },
        { webformatURL: '/inflatable2.jpg', tags: 'Gommone 2' },
        { webformatURL: '/inflatable3.jpg', tags: 'Gommone 3' },
    ];

    const limitedSailboatImages = sailboatImages.slice(0, 2);
    const limitedInflatableImages = inflatableImages.slice(0, 2);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <div>
            <header className="bg-white text-black py-4 text-center">
                <h2 className="text-2xl font-bold mb-4">
                    Benvenuti ad <span className="text-[#002244]">Aquatica</span>
                </h2>
                <p className="mb-4">
                    Il tuo punto di riferimento per barche a vela e gommoni di alta qualità.
                </p>
                <a 
                    href="/azienda" 
                    className="mt-4 inline-block bg-[#001f3f] text-white font-bold py-2 px-4 rounded shadow hover:bg-blue-700 transition-all"
                >
                    Scopri di più
                </a>
            </header>

            <section className="py-8 bg-[#001f3f] text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Scopri Acquatica</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {limitedSailboatImages.map((image, index) => (
                        <img 
                            key={index} 
                            src={image.webformatURL} 
                            alt={image.tags} 
                            className="w-full h-48 object-cover rounded-lg" 
                        />
                    ))}
                    {limitedInflatableImages.map((image, index) => (
                        <img 
                            key={index} 
                            src={image.webformatURL} 
                            alt={image.tags} 
                            className="w-full h-48 object-cover rounded-lg" 
                        />
                    ))}
                </div>
            </section>

            <section className="py-12">
                <h3 className="text-2xl font-bold text-center mb-4">Le Nostre Barche</h3>
                <Slider {...sliderSettings}>
                    {limitedSailboatImages.map((image, index) => (
                        <div key={index} className="p-2">
                            <img 
                                src={image.webformatURL} 
                                alt={image.tags} 
                                className="w-full h-64 object-cover rounded-lg" 
                            />
                        </div>
                    ))}
                </Slider>
                <h3 className="text-xl font-bold text-center mt-6 mb-4">Descrizione delle Barche</h3>
                <p className="text-center">
                    Aquatica offre una vasta selezione di barche a vela di alta qualità per ogni esigenza.
                </p>
            </section>

            <section className="py-12 bg-[#001f3f] text-white text-center">
                <h3 className="text-2xl font-bold mb-4">I Nostri Gommoni</h3>
                <Slider {...sliderSettings}>
                    {limitedInflatableImages.map((image, index) => (
                        <div key={index} className="p-2">
                            <img 
                                src={image.webformatURL} 
                                alt={image.tags} 
                                className="w-full h-64 object-cover rounded-lg" 
                            />
                        </div>
                    ))}
                </Slider>
                <h3 className="text-xl font-bold mt-6 mb-4">Descrizione dei Gommoni</h3>
                <p>
                    Scopri la nostra selezione di gommoni adatti a ogni avventura in acqua.
                </p>
            </section>

            <footer className="bg-[#001f3f] text-white py-4 text-center">
                <p>© 2024 Acquatica. Tutti i diritti riservati.</p>
            </footer>
        </div>
    );
}
