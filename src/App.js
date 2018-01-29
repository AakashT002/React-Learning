import React, { Component } from 'react';
import {Link} from 'react-router-dom' 

class App extends Component {
  render() {
    return (
      <div >
       <Link to="/">Index</Link><br />
        <Link to="/secondPage">Second Page</Link> 
        {this.props.children}         
      </div>
    );
  }
}

export default App;
