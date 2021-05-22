import React from 'react';
import Crd from './MyCard';     // Card Structure importing
import carddata from './Mycarddata';



const Phtos = () => {
    return (
        // <div className="phtgrp">
        // <div className="phts"><img src={imag1} alt="randomphoto1"/></div>
        // <div className="phts"><img src={imag2} alt="randomphoto2"/></div>
        // <div className="phts"><a href={lnk1} target="_picsum"><img src={imag3} alt="randomphotolink3"/></a></div>
        // </div>
        <>
            <div className="crdgrps">
                {carddata.map((curval) => {
                    return (
                        <Crd
                        imgsrc={curval.imgsrc}
                        imgalt={curval.imgalt}
                        titl={curval.titl}
                        catgry={curval.catgry}
                        lnk={curval.lnk}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Phtos;