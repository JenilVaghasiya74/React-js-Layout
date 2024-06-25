import { Carousel } from 'bootstrap'
import React from 'react'
import Carousels from './Carousels'
import About from './About';
import Blog from './Blog';
import Portfolio from './Portfolio';
import Counter from './Counter';
import Team from './Team';

function Home(props) {
  return (
    <div>
      <Carousels slider={props.slid}/>
      <About path={props.svg}/>
      <Portfolio portfolio={props.pro}/>
      
      <Blog/>
      <Counter/>
      <Team  card={props.member} new={props.section} />
    </div>
  )
}

export default Home;
