import React from 'react';
import Crd from './MyCard';     // Card Structure importing
import carddata from './Mycarddata';


let d='Random Original Full HD Photo Series';

const Crddt = () => {
    const mdt = carddata.map((cvl) => {
        if (d===cvl.catgry) {
            return (
                <>
                    <Crd
                    key={cvl.cdid}
                    imgsrc={cvl.imgsrc}
                    imgalt={cvl.imgalt}
                    titl={cvl.titl}
                    catgry={cvl.catgry}
                    lnk={cvl.lnk}
                    />
                </>
            );
        }
    });
    return mdt;
}


const Phtogal = () => {
    return (
        <>
            <div className="crdgrps">{Crddt()}</div>
        </>
    );
}

export default Phtogal;