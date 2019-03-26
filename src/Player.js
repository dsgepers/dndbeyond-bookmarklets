import React, { Component } from 'react';
import axios from 'axios'

class Player extends Component {

    constructor(props) {
        super(props);

        this.state = { };
        this.conditions = {
            1: ""
        };
        this.modifiers = {
            8: -1,
            9: -1,
            10: 0,
            11: 0,
            12: 1,
            13: 1,
            14: 2,
            15: 2,
            16: 3,
            17: 3,
            18: 4,
            19: 4,
            20: 5,
            21: 5,
            22: 6,
            23: 6,
            24: 7,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => axios.get(this.props.link).then(response => this.setState({ player: response.data })), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

  render() {
        if (this.state.player != undefined) {
            console.log(this.state.player);
            const level = this.state.player.character.classes.reduce((a, b) => a.level + b);
            const maxHp = this.state.player.character.baseHitPoints + (this.modifiers[this.state.player.character.stats[3].value] * level);
            const currentHp = maxHp - this.state.player.removedHitPoints;

            console.log(level);
            console.log(maxHp);
            console.log(currentHp);
            return (
                <div className="Player">
                    Name: {this.state.player.character.name}<br/>
                    HP: {currentHp} / {maxHp}
                </div>
            );
        }
        return null;
  }
}

export default Player;
