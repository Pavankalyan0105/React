import React from 'react';

const Item = ({img="assets/img/portfolio/cabin.png"})=>{
    return (
        <div className="col-md-6 col-lg-4 mb-5">
        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
            </div>
            <img class="img-fluid" src={img} alt="..." />
        </div>
    </div>
    )  
}

export default Item;