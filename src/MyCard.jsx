import React from 'react';


const Crd = (props) => {
    return (
        <>
            <div className="crd">
                <img src={props.imgsrc} alt={props.imgalt} />
                <div className="crdinf">
                    <div className="crdtitl">Title : <span>{props.titl}</span></div>
                    <div className="crdcat">Category : <span>{props.catgry}</span></div>
                    <div className="crdlnk">
                        Link : 
                        <a href={props.lnk} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Crd;