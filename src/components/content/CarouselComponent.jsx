import React from 'react';
import { Carousel } from 'antd';
import one from '../../images/1.jpg';
import two from '../../images/2.jpg';
import three from '../../images/3.jpg';
import four from '../../images/4.jpg';

class CarouselComponent extends React.Component {
   onChange = (a, b, c) => {
    console.log(a, b, c);
  }

  render() {
    const height = 300;
    const width = 800;

    return(
      <div id={'carousel-component'}>
        <Carousel
          afterChange={this.onChange}
          autoplay={true}
        >
          <div>
            <img src={one}
                 height={height}
                 width={width}
                 style={{margin: 'auto'}}
                 alt={''}
            />
          </div>
          <div>
            <img src={two}
                 height={height}
                 width={width}
                 style={{margin: 'auto'}}
                 alt={''}
            />
          </div>
          <div>
            <img src={three}
                 height={height}
                 width={width}
                 style={{margin: 'auto'}}
                 alt={''}
            />
          </div>
          <div>
            <img src={four}
                 height={height}
                 width={width}
                 style={{margin: 'auto'}}
                 alt={''}
            />
          </div>
        </Carousel>
      </div>
    )
  }
}

export default CarouselComponent;
