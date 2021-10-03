import React from 'react';
import NavBar from './NavBar';
import AppSection from './AppSection';
import HeroSection from './HeroSection';
import Footer from './Footer';
import CardSection from './CardSection';

const App = () => {
    return (
        <div>
            <NavBar/>
            <HeroSection/>
            <AppSection/>
            <CardSection/>
            <Footer/>
        </div>
    )
}

export default App;