import React from 'react';
import Mtitl from './Mytitl';
import Mcat from './Mycat';
import Mlnk from './Mylnk';


const Mcrdinf = (myprops) => {
    return (
        <>
            <div className="crdinf">
                <Mtitl titl={myprops.titl} />
                <Mcat catgry={myprops.catgry}/>
                <Mlnk lnk={myprops.lnk} />
            </div>
        </>
    );
}

export default Mcrdinf;