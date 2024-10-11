import AuthenticatedLayout from './AuthenticatedLayout';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './waves.css';

// Importa le immagini e i video dalla cartella components
import sailboat1 from './sailboat1.jpg';
import sailboat2 from './sailboat2.webp';
import sailboat3 from './sailboat3.jpg';
import inflatable1 from './inflatable1.jpg';
import inflatable2 from './inflatable2.jpg';
import inflatable3 from './inflatable3.jpg';
import bornFreeVideo from './swimandfly.mp4'; // Importa il video
import logoNegativo from './Logo-scelto-negativo.png'; // Importa il logo negativo
import acquaticaImg from './acquatica.png'; // Importa l'immagine acquatica
import bornfreeImg from './bornfree.jpg'; // Importa l'immagine bornfree

export default function Dashboard() {
    const sailboatImages = [
        { url: sailboat1, tags: 'Barca a vela 1' },
        { url: sailboat2, tags: 'Barca a vela 2' },
        { url: sailboat3, tags: 'Barca a vela 3' },
    ];

    const inflatableImages = [
        { url: inflatable1, tags: 'Gommone 1' },
        { url: inflatable2, tags: 'Gommone 2' },
        { url: inflatable3, tags: 'Gommone 3' },
    ];

    const settings = {
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
        <AuthenticatedLayout>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>

            <header className="bg-white py-4 text-center">
                <section id="acquatica" className="bg-white py-6">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-center p-6 rounded-lg">
                            <div className="lg:w-1/2 text-left p-4">
                                <h2 className="text-3xl font-bold mb-4">
                                    Benvenuti ad <span className="text-[#002244]">Aquatica</span>
                                </h2>
                                <p className="mb-4">
                                    Aquatica è il tuo punto di riferimento per barche a vela e gommoni di alta qualità. Offriamo una vasta selezione per soddisfare tutte le tue esigenze nautiche.
                                </p>
                                <a 
                                    href="/azienda" 
                                    className="mt-4 inline-block bg-[#001f3f] text-white font-bold py-3 px-6 rounded shadow hover:bg-blue-700 transition-all text-lg"
                                >
                                    Scopri di più
                                </a>
                            </div>
                            <div className="lg:w-1/2 lg:pr-0 flex justify-center lg:justify-end mt-4 lg:mt-0">
                                <img 
                                    src={acquaticaImg}
                                    alt="Acquatica"
                                    className="max-w-full h-auto shadow rounded-lg" 
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </header>

            {/* Resto del contenuto della dashboard */}
            <div className="py-12 bg-white relative overflow-hidden">
                <div className="discover-acquatica-section py-12 bg-[#001f3f]">
                    <h2 className="text-4xl font-bold text-center text-white mb-8">Discover Acquatica</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <img 
                            src={sailboatImages[0].url} 
                            alt={sailboatImages[0].tags} 
                            className="w-full h-48 md:h-64 object-cover rounded-lg"
                        />
                        <img 
                            src={inflatableImages[0].url} 
                            alt={inflatableImages[0].tags} 
                            className="w-full h-48 md:h-64 object-cover rounded-lg"
                        />
                        <div className="flex flex-col items-center justify-start p-2 col-span-1 sm:col-span-2">
                            <img 
                                src={logoNegativo} 
                                alt="Logo Acquatica"
                                className="h-16 w-30 mb-2"
                            />
                            <p className="text-white mb-1 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div 
                            className="relative col-span-1 sm:col-span-2 p-4 rounded-lg bg-cover bg-center bg-no-repeat h-60 md:h-96" 
                            style={{ backgroundImage: `url(${bornfreeImg})` }} // Usa l'immagine bornfree
                        >
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-70 rounded-lg"></div>
                            <div className="relative z-10 flex items-center justify-center h-full">
                                <h3 className="text-white text-2xl md:text-4xl font-bold text-center">
                                    Born Free - Esplora l'infinito
                                </h3>
                            </div>
                        </div>
                        <img 
                            src={sailboatImages[1].url} 
                            alt={sailboatImages[1].tags} 
                            className="w-full h-48 md:h-64 object-cover rounded-lg"
                        />
                        <video autoPlay loop className="w-full h-48 md:h-64 object-cover rounded-lg col-span-1">
                            <source src={bornFreeVideo} type="video/mp4" />
                            Il tuo browser non supporta il tag video.
                        </video>
                    </div>

                    <div className="text-white text-center mt-4">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between bg-[#001f3f]">
                <div className="lg:w-1/2 p-4">
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">Le Nostre Barche</h3>
                    <Slider {...settings} className="carousel-container mb-8">
                        {sailboatImages.map((image, index) => (
                            <div key={index} className="p-2">
                                <img 
                                    src={image.url} 
                                    alt={image.tags} 
                                    className="carousel-image w-full h-48 md:h-64 object-cover rounded-lg" 
                                />
                            </div>
                        ))}
                    </Slider>
                    <h3 className="text-xl font-bold mb-4 text-white">Descrizione delle Barche</h3>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
                    </p>
                </div>

                <div className="lg:w-1/2 p-4">
                    <h3 className="text-2xl font-bold mb-4 text-center text-white">I Nostri Gommoni</h3>
                    <Slider {...settings} className="carousel-container mb-8">
                        {inflatableImages.map((image, index) => (
                            <div key={index} className="p-2">
                                <img 
                                    src={image.url} 
                                    alt={image.tags} 
                                    className="carousel-image w-full h-48 md:h-64 object-cover rounded-lg" 
                                />
                            </div>
                        ))}
                    </Slider>
                    <h3 className="text-xl font-bold mb-4 text-white">Descrizione dei Gommoni</h3>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
                    </p>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
