import React from 'react';
import Header from '../components/Header';
import MovieS from '../components/Movie/MovieS';
import Footer from '../components/Footer/Footer';



export default function Movie() {
    return (
        <div className="Profile">
            <Header title="MovieVerse" />
            <MovieS/>
            <Footer/>
        </div>
    );
}
