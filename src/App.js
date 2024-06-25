
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';



import Footer from './Components/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About_page from './Components/About_page';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import Blog_page from './Components/Blog_page';

// menu section 
const menu = [{
  name: "HOME",
  route: "/"

}, {
  name: "ABOUT US",
  route: "/about"

},
{
  name: "SERVICES",
  route: "/services"
},

{
  name: "GALLERY",
  route: "/gallery"
},

{
  name: "BLOG",
  route: "/blog"
},


];

// slider section 
const image = [
  {
    img: require('../src/Image/slider1.jpg'),
    title: 'Decorate Your Home The Way You Want!',
    button: ' CONTACT US',

  },

  {
    img: require('../src/Image/slider2.jpg'),
    title: 'Decorate Your Home The Way You Want!',
    button: ' CONTACT US',
  }
]
// about section 
const aboutdata = [
  {
    icon: <svg class="svg-inline--fa fa-border-all svg fa-w-14 fa-5x" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="border-all" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-32 64v128H256V96zm-192 0v128H64V96zM64 416V288h128v128zm192 0V288h128v128z"></path></svg>,

    title: 'UNIQUE DESIGN',

    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

  },

  {
    icon: <svg class="svg-inline--fa fa-map fa-w-18 fa-5x" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="map" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z"></path></svg>,

    title: 'LUXURY SETUP',

    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

  },

  {
    icon: <svg class="svg-inline--fa fa-th fa-w-16 fa-5x" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="th" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"></path></svg>,

    title: 'AMAZING WALLPAPERS',

    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

  },

  {
    icon: <svg class="svg-inline--fa fa-couch fa-w-20 fa-5x svg" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="couch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"></path></svg>,

    title: 'ELEGANT FURNITURE',

    detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',

  },
]

// OUR WORK section 

const hover = [
  {
    img: require('../src/Image/p1.jpg'),
    title: 'LOREM IPSUM',
    text: 'Designs',
  },

  {
    img: require('../src/Image/slider2.jpg'),
    title: 'LOREM IPSUM',
    text: 'Walls',
  },

  {
    img: require('../src/Image/slider1.jpg'),
    title: 'LOREM IPSUM',
    text: 'Wallpapers',
  },
]

// team section 
const team = [
  {
    img: require('../src/Image/t1.jpg'),
    title: 'MEMBER 1',
    text: 'Interior Designer',

  },

  {
    img: require('../src/Image/t2.jpg'),
    title: 'MEMBER 2',
    text: 'Interior Designer',

  },

  {
    img: require('../src/Image/t3.jpg'),
    title: 'MEMBER 3',
    text: 'Interior Designer',

  },

  {
    img: require('../src/Image/t4.jpg'),
    title: 'MEMBER 4',
    text: 'Interior Designer',

  }

]

// team OUR PRICING

const card = [
  {
    title: 'BASIC',
    price: '$49',
  },

  {
    title: 'PREMIUM',
    price: '$99',
  },

  {
    title: 'PRO',
    price: '$199',
  },
]



function App() {
  return (
    <div>
      {/* <h1>hello</h1> */}
      <Header mainmenu={menu} />
      <Routes>
        <Route path="/" element={<Home slid={image} svg={aboutdata} pro={hover} member={team} section={card} />} />
        <Route path="/about" element={<About_page />} />
        <Route path="/services" element={<Services  />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog_page />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
