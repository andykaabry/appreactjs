import React from 'react'

import { UncontrolledCarousel } from 'reactstrap';

const items = [

     {
       src: 'http://hd.wallpaperswide.com/thumbs/downhill_biking_helmet-t2.jpg',

       altText: 'Slide 1',
       caption: '',
       header: 'H A B I T A T',
       key: '1'
     },
     {
       src: 'https://images.hdqwalls.com/wallpapers/ktm-helmet-image.jpg',
       altText: 'Slide 2',
       caption: '',
       header: 'H E L M',
       key: '2'
    },
     {

     }

   ];

   const Home = () => <UncontrolledCarousel items={items} />;

export default Home;