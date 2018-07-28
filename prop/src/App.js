import React, { Component } from 'react';

import Header from './Header'
import Footer from './Footer'

class App extends Component {
  render()  {
    return (
      <div>
      <Header CurrentUser ="Chanikarn" islogged="true"/>
     <div>Hello world</div> 
     <Footer />
     </div>
    );
  }
}

export default App;
