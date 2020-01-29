import React, {Component} from 'react';
import Beeper from '../components/Beeper'

class MetronomeContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isPlaying: false,
        bpm: 60
    }
    this.updatePlayState = this.updatePlayState.bind(this)
  }

  updatePlayState() {
    this.setState({isPlaying: !this.state.isPlaying})
  }


  render() {
    return (
      <div>
        <h1>Metronome</h1>
        <Beeper isPlaying={this.isPlaying}/>
        <button onClick={this.updatePlayState}>PlayPause</button>
      </div>
    )
  }
}


export default MetronomeContainer;
