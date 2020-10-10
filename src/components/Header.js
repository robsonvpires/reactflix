import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"></img>
                </a>
            </div>
            <div className='header--user'>        
                <a href='/'>
                    <img src='https://lh3.googleusercontent.com/proxy/IYAS18w4dZxbLMkaYHCbDUm1Hybd6A0IjBrm6ABV2W-pInHTxrmCrQlzcpQMTI15lJtMMQOZ8AnaH4lRP0aaQN4r91q65bSYFzsGinVRSFAKbVeJCULY'></img>
                </a>
            </div>
        </header>
    )
}