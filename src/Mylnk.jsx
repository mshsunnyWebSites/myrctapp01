import React from 'react';


const Mlnk = (myprops) => {
    return (
        <>
            <div className="crdlnk">
                Link : 
                <a href={myprops.lnk} target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </>
    );
}

export default Mlnk;