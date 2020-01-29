import React, {Component} from 'react';

class PlayPause extends Component {

  constructor(props) {
    super(props);
  }


    render() {
      return (
        <div>
          <button onClick={this.props.updatePlayState}>PlayPause</button>
        </div>
      )
    }
}


export default PlayPause;
