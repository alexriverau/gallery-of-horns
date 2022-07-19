import React from 'react';
import HornedBeast from './HornedBeast';
import unicornImg from './Images/unicorn.jpg';
import minotaurImg from './Images/minotaur.png';

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast
          title={'Unicorn'}
          imageUrl={unicornImg}
          description={
            'A mythical creature resembling a horse, with a single horn in the center of its forehead.'
          }
        />
        <HornedBeast
          title={'Minotaur'}
          imageUrl={minotaurImg}
          description={
            'A mythical creature with the head and tail of a bull and the body of a man'
          }
        />
      </>
    );
  }
}

export default Main;
