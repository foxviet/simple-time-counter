import React, { Component } from "react";
import "./App.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  getValues(startDate) {
    const time = Date.parse(new Date()) - Date.parse(startDate);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });
  }

  componentDidMount() {
    this.getValues(this.props.startDate);
    setInterval(() => this.getValues(this.props.startDate), 1000);
  }

  leading0(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  render() {
    return (
      <div>
        <div className="Clock-days">{this.leading0(this.state.days)} days</div>
        <div className="Clock-hours">
          {this.leading0(this.state.hours)} hours
        </div>
        <div className="Clock-minutes">
          {this.leading0(this.state.minutes)} minutes
        </div>
        <div className="Clock-seconds">
          seconds {this.leading0(this.state.seconds)}
        </div>
      </div>
    );
  }
}

export default Clock;
