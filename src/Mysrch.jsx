import React from 'react';


const Srch = () => {
    const txtdt = document.getElementById('srch').value;
    return txtdt;
}

const Msrch = () => {
    return (
        <>
            <div className="sfld">
                <span className="stxt">
                    <input type="text" name="srch" id="srch" />
                </span>
                <span className="sbtn">
                    <input type="button" name="btn" id="btn" value="Search" onClick={Srch} onLoad={Srch} />
                </span>
            </div>
        </>
    );
}

export default Msrch;
export {Srch};