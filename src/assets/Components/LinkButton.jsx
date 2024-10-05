import React from 'react';

const LinkButton = ({text,link,icon}) => {
    return (
        <div>
            <button className='btn btn-basic'>
             <a href={link}>
               {icon} {text} </a>
            </button>
        </div>
    );
};

export default LinkButton;