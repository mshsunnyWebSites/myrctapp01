import React from 'react';


const imag1='https://picsum.photos/1500/700';
const imag2='https://picsum.photos/1500/699';
const imag3='https://picsum.photos/1500/698';

const lnk1='https://picsum.photos/';

const Phtos = () => {
    return (
        <div className="phtgrp">
        <div className="phts"><img src={imag1} alt="randomphoto1"/></div>
        <div className="phts"><img src={imag2} alt="randomphoto2"/></div>
        <div className="phts"><a href={lnk1} target="_picsum"><img src={imag3} alt="randomphotolink3"/></a></div>
        </div>
    );
}

export default Phtos;