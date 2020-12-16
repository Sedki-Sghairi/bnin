import React from 'react'
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
      src: 'images/1.jpg',
      altText: 'Slide 1',
      caption: 'We support our local community',
      header: 'All Our Food is made by  Fresh Local Ingredients',
      key: '1'
    },
    {
      src: 'images/2.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header',
      key: '2'
    },
    {
      src: 'images/3.jpg',
      caption: 'Slide 3',
      header: 'Slide 3 Header',
      key: '3'
    }
  ];
  

export default function Home() {
    return (
        <div className="neg-mar">
            <UncontrolledCarousel items={items} />
        </div>
    )
}

