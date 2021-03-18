import React from 'react';
// import Header from '../../Components/Header'
// import { Hiro } from '../../Components/Hiro';
import { GlobalStyle } from '../../Components/GloblaStyle';
// import { Features } from '../../Components/Features';
// import { ProtoAbouts } from '../../Components/ProtoAbouts';
// import ImageAbout from '../../Assets/pollos-about-02.jpg';
// import { About } from '../../Components/About';
// import Form from '../../Components/Form'
// import { Footer } from '../../Components/Footer'
import NavbarLogo from '../../Components/Navbar/index';
import Slider from '../../Components/Banner/Slider';



function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavbarLogo />
      <Slider />
      {/* <Hiro />
      <Features />
      <ProtoAbouts
        ImageAbout={ImageAbout}
      />
      <About />
      <Form />
      <Footer /> */}
    </div>
  );
}

export default App;
