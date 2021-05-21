import React from 'react';
import moment from 'moment';  // Importing Moment.js Package for Manual Date Time Format after manually installing npm for moment.js


const now=new Date();
const curdt=moment(now).format('dddd w DD/MM/YYYY'); // Using Moment package for manual date format
const curtm=moment(now).format('hh:mm:ss.SSSS a'); // Using Moment package for manual time format
// const curdt=new Date().toLocaleDateString();
// const curtm=new Date().toLocaleTimeString();

const Dttm = () => {
    return (
        <>
            <p><span className="dtd">{`Current Date : ${curdt}`}</span></p>
            <p><span className="tmd">{`Current Time : ${curtm}`}</span></p>
        </>
    );
}

export default Dttm;