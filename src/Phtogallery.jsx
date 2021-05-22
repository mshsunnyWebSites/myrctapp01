import React from 'react';
import Crd from './MyCard';     // Card Structure importing
import carddata from './Mycarddata';



const Phtogal = () => {
    return (
        <>
            <div className="crdgrps">
                {carddata.map((curval) => {
                    return (
                        <Crd
                        key={curval.cdid}
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

export default Phtogal;