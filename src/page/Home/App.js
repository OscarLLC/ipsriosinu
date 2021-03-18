import React from 'react';
import { GlobalStyle } from '../../Components/GloblaStyle';
import NavbarLogo from '../../Components/Navbar/index';
import Slider from '../../Components/Banner/Slider';
import { Hiro } from '../../Components/Hiro';
import { WeIps } from '../../Components/WeIps'



function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavbarLogo />
      <Slider />
      <WeIps />
      <Hiro />
      
    </div>
  );
}

export default App;
