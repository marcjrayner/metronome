import React, {Component} from 'react';
import Beeper from '../components/Beeper'
import Slider from '../components/Slider'

class MetronomeContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isPlaying: false,
        bpm: 60,
        intervalId: null
    }
    this.updatePlayState = this.updatePlayState.bind(this)
    this.updateIntervalId = this.updateIntervalId.bind(this)
  }

  updatePlayState() {
    this.setState({isPlaying: !this.state.isPlaying})
  }

  updateIntervalId(newId) {
    this.setState({intervalId: newId})
  }


  render() {
    return (
      <div>
        <h1>Metronome</h1>
        <button onClick={this.updatePlayState}>PlayPause</button>
        <Beeper
          isPlaying={this.state.isPlaying}
          intervalId={this.state.intervalId}
          updateIntervalId={this.updateIntervalId}
        />
        <Slider />
      </div>
    )
  }
}


export default MetronomeContainer;
