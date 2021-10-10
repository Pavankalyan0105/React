import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import CopyRight from './CopyRight';
import PortFolioModals from './PortFolioModals';

const App = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Portfolio/>
            <About/>
            <Contact/>
            <Footer/>
            <CopyRight/>
            <PortFolioModals/>
        </div>
    )
}

export default App;