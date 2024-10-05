import React from 'react';

const LinkButton = ({text,link,icon}) => {
    return (
        <div>
            <button className='btn btn-basic'>
             <a className='flex gap-1' href={link}>
                <span>{icon}</span>
                <span>{text} </span>
                </a>
            </button>
        </div>
    );
};

export default LinkButton;