import React, { Component } from "react";
import albumData from "./../data/albums";
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find(album => {
      return album.slug === this.props.match.params.slug;
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      volume: .5,
      duration: album.songs[0].duration,


      isPlaying: false,
      hoveredSong: null
    };

    this.audioElement = document.createElement("audio");
    this.audioElement.src = album.songs[0].audioSrc;
    }

    componentDidMount() {
      this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime});
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
    }
  };
    this.audioElement.addEventListener (
      'timeupdate',
      this.eventListeners.timeupdate
    );
    this.audioElement.addEventListener(
      'durationchange',
      this.eventListeners.durationchange
    );
    this.props.change_page_state ("library");
  }

    componentWillUnmount() {
      this.audioElement.src = null;
      this.audioElement.removeEventListener (
        'timeupdate',
        this.eventListeners.timeupdate
      );
      this.audioElement.removeEventListener(
        'durationchange',
        this.eventListeners.durationchange
      );
    }

    handleTimeChange(e) {
      const newTime = this.audioElement.duration * e.target.value;
      this.audioElement.currentTime = newTime;
      this.setState ({currentTime: newTime });
    }

    formatTime(currentTime) {
    if (isNaN(parseInt(currentTime))) {
      return "-:--";
    } else {
      let minutes = currentTime / 60;
      let seconds = (currentTime % 60).toFixed(0);
      if (seconds < 10 ){
        seconds="0" + seconds
      }
      return minutes.toFixed(0) + ":" + seconds;
    }
  }



  handleVolumeChange (e) {
    const newVolume = this.audioElement.currentVolume * e.target.value;
    this.audioElement.volume = e.target.value;
    this.setState ({volume: e.target.value});
  }

    componentVolumeMount () {
      this.eventListener = {
        volumeupdate: e => {
          this.setState ({volume: this.audioElement.currentVolume});
        }
      }
        this.audioElement.
          addEventListener (
          'volumeupdate',
          this.eventListener.volumeupdate);
    }
    componentVolumeUnmount () {
        this.audioElement.
          removeEventListener
          ('volumeupdate',
          this.eventListener.volumeupdate);
    }



    setSong(song) {
      this.audioElement.src = song.audioSrc;
      this.setState({ currentSong: song });
    }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }
  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) {
        this.setSong(song);
      }
      this.play();
    }
  }
  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max (0, currentIndex -1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleNextClick() {
    const nextCurrentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const nextIndex = Math.min (nextCurrentIndex + 1, 4);
    const nextSong = this.state.album.songs[nextIndex];
    this.setSong(nextSong);
    this.play();
  }


  onMouseEnter(song) {
    this.setState({
      hoveredSong: song
    });
  }

  onMouseLeave() {
    this.setState({
      hoveredSong: null
    });
  }

  getIconForSong(song, index) {
    if (this.state.currentSong === song && this.state.isPlaying) {
      return <span className='icon ion-md-pause'></span>
    } else if (song === this.state.hoveredSong) {
      return <span className='icon ion-md-play'></span>
    } else {
      return index + 1
    }
  }

  render() {
    return (
      <section className="album">
        <section id="album-info">
          <img
            id="album-cover-art"
            src={this.state.album.albumCover}
            alt={this.state.album.title}
          />
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
            {this.state.album.songs.map((song, index) =>
              <tr
                className="song"
                key={index}
                onClick={() => this.handleSongClick(song)}
                onMouseEnter={() => this.onMouseEnter(song)}
                onMouseLeave={() => this.onMouseLeave()}
              >
                <td>{this.getIconForSong(song, index)}</td>
                <td>{song.title}</td>
                <td>{this.formatTime(song.duration)}</td>
              </tr>
            )}
          </tbody>
        </table>
        <PlayerBar
        isPlaying={this.state.isPlaying}
        currentSong={this.state.currentSong}
        currentTime={this.audioElement.currentTime}
        currentVolume={this.state.volume}
        duration={this.audioElement.duration}
        handleTimeChange={(e) => this.handleTimeChange (e)}
        handleVolumeChange={(e) =>this.handleVolumeChange (e)}
        formatTime={(t) => this.formatTime(t)}
        handleSongClick={() => this.handleSongClick(this.state.currentSong)}
        handlePrevClick={() => this.handlePrevClick()}
        handleNextClick={() => this.handleNextClick()}




        />
        </section>
    );
  }
}
export default Album;
