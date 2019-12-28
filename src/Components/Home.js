import React from 'react';

const Home = () => {
  const quote = '"The stars will never be won by little minds, we must be big as space itself"';
  const robert = '-Robert A. Heinlein-';
  return(
    <div className='home' id='home'>
      <div className='quote'>
        {quote}
        <br/>
        <p className='robert'>{robert}</p>
      </div>
    </div>
  );
}

export default Home;