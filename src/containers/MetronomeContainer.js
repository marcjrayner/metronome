import React, {Component} from 'react';
import PlayPause from '../components/PlayPause'

class MetronomeContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        bpm: 60
    }
  }

  render() {
    return (
      <div>
        <h1>Metronome</h1>
        <PlayPause bpm={this.bpm}/>
      </div>
    )
  }
}


export default MetronomeContainer;
