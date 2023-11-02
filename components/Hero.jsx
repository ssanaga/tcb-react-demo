

import Logo from './Logo';

import React from 'react';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url('https://ssowmya.s3.us-east-2.amazonaws.com/TCB.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
  };

  return (
    // <div className="mb-5" data-testid="external"><div backgroundImage='https://ssowmya.s3.us-east-2.amazonaws.com/TCB.png'>Hello sample text</div></div>
    <div data-testid="hero" style={heroStyle}>
      Hello sample text
    </div>

    // <div className="hero" style={heroStyle} data-testid="hero">
    //   {/* <Logo testId="hero-logo" /> */}
    //   {/* Content goes here */}
    // </div>
  );
};

export default Hero;
