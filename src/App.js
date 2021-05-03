import React from 'react';
import Main from './Component/Main';
import Footer from './Component/Footer';
import Header from './Component/Header';
// import axios from 'axios';


export class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;


