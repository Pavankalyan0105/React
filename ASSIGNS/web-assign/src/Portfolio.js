import React from 'react';
import Item from './Item';

const Portfolio = ()=>{
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* <!-- Portfolio Section Heading--> */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                {/* <!-- Portfolio Grid Items--> */}
                <div class="row justify-content-center">

                <Item img="assets/img/portfolio/cabin.png"/>
                <Item img="assets/img/portfolio/cake.png"/>
                <Item img="assets/img/portfolio/circus.png"/>
                <Item img="assets/img/portfolio/game.png"/>
                <Item img="assets/img/portfolio/safe.png"/>
                <Item img="assets/img/portfolio/submarine.png"/>
                </div>
            </div>
        </section>
    )
}
export default Portfolio;