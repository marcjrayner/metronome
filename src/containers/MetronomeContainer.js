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
    this.setIntervalId = this.setIntervalId.bind(this)
    this.clearIntervalId = this.clearIntervalId.bind(this)
    this.startPlaying = this.startPlaying.bind(this)
    this.stopPlaying = this.stopPlaying.bind(this)
    this.updateBpm = this.updateBpm.bind(this)
  }

  updatePlayState() {
    this.setState({isPlaying: !this.state.isPlaying})
  }

  startPlaying() {
    this.setState({isPlaying: true})
  }

  stopPlaying() {
    this.setState({isPlaying: false})
  }

  setIntervalId(newId) {
    this.setState({intervalId: newId})
  }

  clearIntervalId() {
    this.setState({intervalId: null});
  }

  updateBpm(newBpm) {
    this.setState({bpm: newBpm})
    if (this.state.isPlaying && this.state.intervalId) {
      this.stopPlaying();
      setTimeout(this.startPlaying);
    }
  }

  render() {
    return (
      <div>
        <h1>Metronome</h1>
        <h2>{this.state.bpm} BPM</h2>
        <button onClick={this.updatePlayState}>PlayPause</button>
        <Beeper
          isPlaying={this.state.isPlaying}
          intervalId={this.state.intervalId}
          setIntervalId={this.setIntervalId}
          clearIntervalId={this.clearIntervalId}
          currentBpm={this.state.bpm}
        />
        <Slider
          updateBpm={this.updateBpm}
        />

      </div>
    )
  }
}


export default MetronomeContainer;
