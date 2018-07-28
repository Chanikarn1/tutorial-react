import React, { Component } from 'react';

import Header from './Header'
import Footer from './Footer'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      currrentTime:0
    }
    this.handleFooter=this.handleFooter.bind(this)
  }
  handleFooter(time){
    this.setState({currrentTime: time})
  }
  render()  {
    let {currrentTime} = this.state
    return (
      <div>
      <Header CurrentUser ="Chanikarn" islogged="true"/>
     <div>currrentTime: {currrentTime}</div> 
     <Footer onTimerClick={this.handleFooter}/>
     </div>
    );
  }
}

export default App;
