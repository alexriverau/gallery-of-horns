import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast title={'Unicorn'} description={'Mythical Creature'} />
        <HornedBeast title={'Minotaur'} description={'Mythical Creature'} />
      </>
    );
  }
}

export default Main;
