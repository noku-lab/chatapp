import React from 'react';


import './InfoBar.css';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

const InfoBar=({ room, name }) => {
    return (
        <div className="infoBar">
            <div className ="leftInnerContainer">
                <img className= "onlineIcon" src = {onlineIcon} alt =""/>
                <h3> {room} and {name}</h3>
            </div>
            <div className ="rightInnerContainer">
                 <a href="/"><img src ={closeIcon} alt=""/></a>
            </div>
        </div>
    )
}

export default InfoBar
