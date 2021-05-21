import React from 'react';

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
        <ol>
            <li></li>
            <li></li>
        </ol>
    );
}

const stls = () => {
    return (
        <p></p>
    );
}

export default Para;