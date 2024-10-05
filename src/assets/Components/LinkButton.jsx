import React from 'react';

const LinkButton = ({text,link,icon}) => {
    return (
        <div>
            <button className='btn w-4/5 md:w-full bg-yellow-400 hover:bg-green-700 text-green-700 hover:text-yellow-400 '>
             <a className='flex gap-1' href={link}>
                <span>{icon}</span>
                <span>{text} </span>
                </a>
            </button>
        </div>
    );
};

export default LinkButton;