import React from 'react'
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
      src: 'images/1.jpg',
      altText: 'Slide 1',
      caption: 'We take our customers feedback very seriously, and we only offer what they label "delicious"',
      header: 'Delicious Is Not just Our Brand Name',
      key: '1'
    },
    {
      src: 'images/2.jpg',
      altText: 'All Our Food is made by  Fresh Local Ingredients',
      caption: 'All Our Food is made by  Fresh Local Ingredients',
      header: 'We support our local community',
      key: '2'
    },
    {
      src: 'images/3.jpg',
      caption: 'Give yourself a treat by trying our signature breakfast',
      header: 'Our Chef Special',
      key: '3'
    }
  ];
  

export default function Home() {
    return (
        <div className="container-fluid">
            <UncontrolledCarousel items={items} />
        </div>
    )
}

