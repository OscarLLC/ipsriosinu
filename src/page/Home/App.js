import React, { Component } from 'react';
import { GlobalStyle } from '../../Components/GloblaStyle';
import NavbarLogo from '../../Components/Navbar/index';
import Slider from '../../Components/Banner/Slider';
import { Hiro } from '../../Components/Hiro';
import { WeIps } from '../../Components/WeIps';
import { Footer } from '../../Components/Footer';

class App extends Component{

  state = {
    noticias: []
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = () => {
    let url = "https://newsapi.org/v2/top-headlines?country=co&category=general&apiKey=4bf0f2138d46454c810ab20246978590";
    fetch(url)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(noticias => {
      this.setState({
        noticias: noticias.articles
      })
    })

  }

 render(){
  return (
    <div className="App">
      <GlobalStyle />
      <NavbarLogo />
      <Slider />
      <WeIps />
      <Hiro />
      <Footer />
    </div>
  );
 }
}

export default App;
