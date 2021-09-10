import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const images = [logo, logo, logo, logo, logo, logo];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          The City of Toronto
        </p>
        <p>Historical Sites & More</p>
      </header>
      <section class="grid">
        {
          images.map(image => <img src={image} alt="logo" onClick={()=>setSelectedImage(image)} />)
        }
      </section>
      <div id='overlay' style={{visibility: selectedImage ? 'visible': 'hidden'}}>
        <h1><a class="close" onClick={ ()=>setSelectedImage(null) }>X</a></h1>
        <img src={selectedImage} />
      </div>
    </div>
  );
}

export default App;
