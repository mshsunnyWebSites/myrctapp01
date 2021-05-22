import React from 'react';
import moment from 'moment';


const fnam='Sunny';
const lname='Halder';

// const now=new Date(2021, 5, 20, 3);    // Manual Date Entry
const now=new Date();
const curhr=moment(now).format('HH');

let greetng='';
const csstyl = {};
let flg=0;

if(curhr>=3 && curhr<12) {
    greetng='Good Morning,';
    csstyl.color='green';
    flg=1;
}
else if(curhr===12) {
    greetng='Good Noon,';
    csstyl.color='orange';
    flg=2;
}
else if(curhr>12 && curhr<17) {
    greetng='Good Afternoon,';
    csstyl.color='red';
    flg=3;
}
else if(curhr>=17 && curhr<20) {
    greetng='Good Evening,';
    csstyl.color='navy';
    flg=4;
}
else {
    greetng='Good Night,';
    csstyl.color='black';
    flg=0;
}

/* Mouse Hover event = MouseEnter DOM event + MouseLeave DOM event */
const cssentrstyl = () => {
    if(flg===1) {
        document.getElementById('grtng').style.color='#81ea7b';
    }
    else if(flg===2) {
        document.getElementById('grtng').style.color='yellow';
    }
    else if(flg===3) {
        document.getElementById('grtng').style.color='#ff7171';
    }
    else if(flg===4) {
        document.getElementById('grtng').style.color='Blue';
    }
    else {
        document.getElementById('grtng').style.color='#6e6e6e';
        document.getElementById('grtng').innerHTML='OMG,';
    }
}

const cssleavstyl = () => {
    if(flg===1) {
        document.getElementById('grtng').style.color='green';
    }
    else if(flg===2) {
        document.getElementById('grtng').style.color='orange';
    }
    else if(flg===3) {
        document.getElementById('grtng').style.color='red';
    }
    else if(flg===4) {
        document.getElementById('grtng').style.color='navy';
    }
    else {
        document.getElementById('grtng').style.color='black';
        document.getElementById('grtng').innerHTML=greetng;

    }
}




const Headng = () => {
    return (
        <>
            <p>     {/* Using JSX Template Literals */}
                <span className="hdng" onMouseEnter={cssentrstyl} onMouseLeave={cssleavstyl}>
                    {`Hi,`}<span style={csstyl} id='grtng'>&nbsp;{greetng}</span>&nbsp;{`${fnam} ${lname} Welcome to React App.`}
                </span>
            </p>
            
            <p>
                <span className="calc">
                    {`Mathematical Expression : ${5*9}`}
                </span>
            </p>
        </>
    );
}

export default Headng;