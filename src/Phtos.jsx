import React from 'react';
import Crd from './MyCard';


const imag1='https://picsum.photos/1500/700';
const imag2='https://picsum.photos/1500/699';
const imag3='https://picsum.photos/1500/698';

const lnk1='https://picsum.photos/';

const Phtos = () => {
    return (
        // <div className="phtgrp">
        // <div className="phts"><img src={imag1} alt="randomphoto1"/></div>
        // <div className="phts"><img src={imag2} alt="randomphoto2"/></div>
        // <div className="phts"><a href={lnk1} target="_picsum"><img src={imag3} alt="randomphotolink3"/></a></div>
        // </div>
        <>
            <div className="crdgrps">
                <Crd
                imgsrc={imag1}
                imgalt='randomphoto1'
                titl='Phto Title1'
                catgry='Random Original Full 4k Photo Series'
                lnk='Phtolink1'
                />

                <Crd
                imgsrc={imag2}
                imgalt='randomphoto2'
                titl='Phto Title2'
                catgry='Random Original Full 4k Photo Series'
                lnk='Phtolink2'
                />

                <Crd
                imgsrc={imag3}
                imgalt='randomphoto3'
                titl='Phto Title3'
                catgry='Random Original Full 4k Photo Series'
                lnk={lnk1}
                />
            </div>
        </>
    );
}

export default Phtos;