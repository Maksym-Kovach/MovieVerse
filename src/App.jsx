import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/Promo/HeroSection';
import MovieList from './components/MovieList/MovieList';
import Footer from './components/Footer/Footer';


export default function App() {
    return (
        <div className="App">
            <Header title="MovieVerse" />
            <HeroSection
                title="Marvel 1943: Rise of Hydra"
                description="In the chaos of war, worlds collide. Skydance New Media and Marvel Games share an original story where an ensemble of four heroes must overcome their differences and form an uneasy alliance to confront their common enemy."
                imageUrl="https://i.ytimg.com/vi/Lb2wwEx6DVw/maxresdefault.jpg"
            />
            <MovieList />
            <Footer />
        </div>
    );
}
