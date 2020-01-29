import React from 'react';
import './Slider.css'

const Slider = (props) => {

  function handleChange(e) {
    props.updateBpm(parseInt(e.target.value))
  }

  return (
    <div className="slideContainter">
      <input
        type="range"
        min="40"
        max="218"
        class="slider"
        id="myRange"
        onChange={handleChange}/>
    </div>
  )

}

export default Slider;
