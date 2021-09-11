import React from 'react';
import Modal from './Modal'

const PortFolioModals = () => {
    return (    
        <React.Fragment>    
        <Modal 
        title = " Cabin"
        img = "assets/img/portfolio/cake.png"
        />
        <Modal 
            title = " Cabin"
            img = "assets/img/portfolio/cake.png"
        />
        
        <Modal 
            title = "Tasty Cake"
            img = "assets/img/portfolio/cake.png"
        />
        
        <Modal 
            title = "Circus Tent"
            img = "assets/img/portfolio/circus.png"
        />
        

        <Modal 
            title = "Controller"
            img = "assets/img/portfolio/game.png"
        />
        
        <Modal 
            title = "Locked Safe"
            img = "assets/img/portfolio/safe.png"
        />
        
        <Modal 
            title = "Submarine"
            img = "assets/img/portfolio/submarine.png"
        />
    </React.Fragment>     
  )
}
export default PortFolioModals;