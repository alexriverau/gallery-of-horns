import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast
          title={data[0].title}
          description={data[0].description}
          image_url={data[0].image_url}
        />
        <HornedBeast
          title={data[1].title}
          description={data[1].description}
          image_url={data[1].image_url}
        />
        <HornedBeast
          title={data[2].title}
          description={data[2].description}
          image_url={data[2].image_url}
        />
        <HornedBeast
          title={data[3].title}
          description={data[3].description}
          image_url={data[3].image_url}
        />
        <HornedBeast
          title={data[4].title}
          description={data[4].description}
          image_url={data[4].image_url}
        />
        <HornedBeast
          title={data[5].title}
          description={data[5].description}
          image_url={data[5].image_url}
        />
        <HornedBeast
          title={data[6].title}
          description={data[6].description}
          image_url={data[6].image_url}
        />
        <HornedBeast
          title={data[7].title}
          description={data[7].description}
          image_url={data[7].image_url}
        />
        <HornedBeast
          title={data[8].title}
          description={data[8].description}
          image_url={data[8].image_url}
        />
        <HornedBeast
          title={data[9].title}
          description={data[9].description}
          image_url={data[9].image_url}
        />
        <HornedBeast
          title={data[10].title}
          description={data[10].description}
          image_url={data[10].image_url}
        />
        <HornedBeast
          title={data[11].title}
          description={data[11].description}
          image_url={data[11].image_url}
        />
        <HornedBeast
          title={data[12].title}
          description={data[12].description}
          image_url={data[12].image_url}
        />
        <HornedBeast
          title={data[13].title}
          description={data[13].description}
          image_url={data[13].image_url}
        />
        <HornedBeast
          title={data[14].title}
          description={data[14].description}
          image_url={data[14].image_url}
        />
        <HornedBeast
          title={data[15].title}
          description={data[15].description}
          image_url={data[15].image_url}
        />
        <HornedBeast
          title={data[16].title}
          description={data[16].description}
          image_url={data[16].image_url}
        />
        <HornedBeast
          title={data[17].title}
          description={data[17].description}
          image_url={data[17].image_url}
        />
        <HornedBeast
          title={data[18].title}
          description={data[18].description}
          image_url={data[18].image_url}
        />
        <HornedBeast
          title={data[19].title}
          description={data[19].description}
          image_url={data[19].image_url}
        />
      </>
    );
  }
}

export default Main;
