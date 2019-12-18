import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = { loggedIn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return { loggedIn: !prevState.loggedIn };
    });
  }

  render() {
    const textToRender = this.state.loggedIn ? "Log Out" : "Log In";
    return <button onClick={this.handleClick}>{textToRender}</button>;
  }
}

export default App;
