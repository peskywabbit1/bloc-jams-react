import React, { Component } from 'react';
import './PlayerBar.css';


class PlayerBar extends Component {
formatVolume(volume) {
  return volume * 10
}
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span className="ion-skip-backward" ></span>
            <ion-icon name="skip-backward" size="large"></ion-icon>
          </button>
            <button id="play-pause" onClick={this.props.handleSongClick} >
            <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
            <ion-icon name="power" size="large"></ion-icon>
          </button>
          <button id="next" onClick={this.props.handleNextClick}>
            <span className="ion-skip-forward"></span>
            <ion-icon name="skip-forward" size="large"></ion-icon>
          </button>
        </section>
        <section id="time-control">
          <div className="current-time inline-time">{this.props.formatTime(this.props.currentTime)}</div>
          <input
          type="range"
          className="seek-bar"
          value={(this.props.currentTime / this.props.duration)|| 0}
          max="1"
          min="0"
          step="0.01"
          onChange={this.props.handleTimeChange}

          />
          <div className="total-time inline-time">{this.props.formatTime(this.props.duration)}</div>

        </section>
        <section id="volume-control">
          <div className="icon ion-volume-low"></div>

          <input
          type="range"
          className="seek-bar"
          value={this.props.currentVolume}
          min="0"
          max="1"
          step="0.1"
          onChange={this.props.handleVolumeChange}
          />
          <div className="icon ion-volume-high"></div>
          <div className="volume-update">Volume Level: {this.formatVolume(this.props.currentVolume)}</div>

      </section>
    </section>
    );
  }
}

export default PlayerBar;
