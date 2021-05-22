import React from 'react';
import Mphts from './Myphtos';
import Mcrdinf from './Mycrdinf';


const Crd = (myprops) => {
    return (
        <>
            <div className="crd">
                <Mphts imgsrc={myprops.imgsrc} imgalt={myprops.imgalt} />
                <Mcrdinf titl={myprops.titl} catgry={myprops.catgry} lnk={myprops.lnk} />
            </div>
        </>
    );
}

export default Crd;