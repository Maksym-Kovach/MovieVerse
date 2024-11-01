import React from 'react';
import Header from '../components/Header';
import UserProfile from '../components/UserProfile/UserProfile';
import MovieSections from '../components/MovieProfile/MovieSections';
import Footer from '../components/Footer/Footer';


export default function Profile() {
    return (
        <div className="Profile">
            <Header title="MovieVerse" />
            <UserProfile />
            <MovieSections />
            <Footer />
        </div>
    );
}
