import React from 'react';


const stmt = 'My Statements';

const Para = () => {
    return (
        <p><span className="dsc">{`You are now using React version >16.0.0.
        So you just need to enclose all elements in JSX within Square Brackets & differntiated with comma.
        Otherwise You can add React.Fragment tag for enclosing(also React.Fragment Sugar Template form) can be used for Multiple Elements.`}</span></p>
    );
}

const lsts = () => {
    return (
        <ul>
            <li></li>
            <li></li>
        </ul>
    );
}

const rsts = () => {
    return (
        <p></p>
    );
}

const stls = () => {
    return (
        <ol>
            <li>item 1</li>
            <li>item 2</li>
        </ol>
    );
}

export default Para;    // Default variable or function export
export {stmt, lsts, rsts, stls};   // Other variables or functions export