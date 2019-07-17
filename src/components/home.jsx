import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      password: '',
     }
  }
  handleClick() {

  }

  handleInput() {
    // this.setState({ password: userInput})
  }

  render() { 
    return (
      <div>
        <input></input>
        <button>Generate Password</button>
      </div>
    );
  }
}
 
export default Home;