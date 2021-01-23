import React, { Component } from "react";
import Clock from "./Clock";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "August 28 2018 3:10:09 PM",
    };
    //document.body.style.backgroundColor = "yellow";
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-title">I've been here in Canada for...</div>
          <Clock startDate={this.state.startDate} />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
