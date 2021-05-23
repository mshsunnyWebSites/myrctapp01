import React from 'react';
import Crd from './MyCard';     // Card Structure importing
import carddata from './Mycarddata';
import {Srch} from './Mysrch';


// let d = Srch;
let d = '';
let flg = 1;


const Crddt = () => {
    const mdt = carddata.map((cvl) => {
        flg=1;
        if (d == '') {
            flg=1;
            return (
                <>
                    {/* {flg} */}
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
        else if (d==cvl.catgry) {
            flg=1;
            return (
                <>
                    {/* {flg} */}
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
        // else if (d!=cvl.catgry) {
        //     flg = 0;
        //     // return flg;
        //     return (
        //         <>
        //             {/* {flg} */}
        //             <Crd
        //             key={cvl.cdid}
        //             imgsrc={cvl.imgsrc}
        //             imgalt={cvl.imgalt}
        //             titl={cvl.titl}
        //             catgry={cvl.catgry}
        //             lnk={cvl.lnk}
        //             />
        //         </>
        //     );
        // }
    });
    return mdt;
}

// if (flg==0) {
//     document.getElementById('fg').innerHTML='No Such Results.';
// }
// else {
//     document.getElementById('fg').innerHTML='';
// }

const Phtogal = () => {
    return (
        <>
            {/* <span id='fg'></span> */}
            <div className="crdgrps">{Crddt()}</div>
        </>
    );

    // if (flg==0) {
    //     return (
    //         <>
    //             <span>No Such Results.</span>
    //             <div className="crdgrps">{Crddt()}</div>
    //         </>
    //     );
    // }
    // else {
    //     return (
    //         <>
    //             <span></span>
    //             <div className="crdgrps">{Crddt()}</div>
    //         </>
    //     );
    // }
}

export default Phtogal;
export {flg};