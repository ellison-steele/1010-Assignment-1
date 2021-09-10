
import assets from './assets/index.js';
import './App.css';
import { useState } from 'react';


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Masonry from 'react-masonry-css'

library.add(fab)
library.add(fas)

function App() {
  const images = [assets.citySkyline, assets.cnTower, assets.rogersCenter, assets.oldCityHall, assets.rom, assets.newCityHall];
  const [selectedImage, setSelectedImage] = useState(null);

  return (

    <div className="Wrapper">

      <div className="App">
        <header className="App-header">
          <p className="title">
            The City of <b> Toronto </b>
          </p>

          <p className="info">
            Historical Sites & <b> More </b></p>
        </header>

        <Masonry breakpointCols={3} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {
            images.map(image => <div class="item" onClick={() => setSelectedImage(image.image)}><div class="overlay"><h1>{image.title}</h1><p>{image.caption}</p></div><img src={image.image} alt="logo" /></div>)
          }
        </Masonry>

        <div id='overlay' className={selectedImage ? 'visible' : ''}>
          <h1><a class="close" onClick={() => setSelectedImage(null)}><FontAwesomeIcon icon={['fas', 'times']} /></a></h1>
          <img src={selectedImage} />
        </div>
      </div>

      <div className="App-footer">

        <div className="footer-icon-spacing">

          <div class="social-icon"><a href="https://twitter.com/cityoftoronto"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></div>
          <div class="social-icon"><a href="https://www.facebook.com/cityofto/"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></div>
          <div class="social-icon"><a href="https://ca.linkedin.com/company/city-of-toronto"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a></div>
          <div class="social-icon"><a href="https://www.instagram.com/cityofto"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div>

        </div>

      </div>

    </div > //wrapper

  );
}


export default App;
