import React, { Component } from 'react';
import axios from 'axios'

class Player extends Component {

    componentDidMount() {
        this.interval = setInterval(() => axios.get(this.props.link).then(response => this.setState({ player: response })), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

  render() {
    return (
      <div className="Player">
        Lalalala
      </div>
    );
  }
}

export default Player;
