import React from 'react';

const Offline = () => {
    return (
        <div className='offline'>
        <div className="offline-wrapper">
            <h1>YOU ARE OFFLINE</h1>
            <h4>Please check your internet connection</h4>
            <a href="https://full-stack-biriyani.netlify.app/" className="button">RETRY</a>
        </div>
        </div>
    );
}

export default Offline;

