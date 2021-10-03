
import React from 'react';
import { FaTimes ,  FaPen , FaRegCircle} from 'react-icons/fa';

const Icon = ({ name })=>{
    switch(name){
        case "circle": return <FaRegCircle size="2em" className="icons" />
        case "cross": return <FaTimes size="2em" className="icons"/>
        default : return <FaPen className="icons"/>
    }
}

export default Icon;