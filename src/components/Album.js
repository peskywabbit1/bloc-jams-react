import React, { Component } from 'react';
import albumData from './../data/albums';


class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      isPlaying: false,
      hoveredSong: null
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
  }
  play() {
    this.audioElement.play();
    this.setState({isPlaying: true})
  }
  pause() {
    this.audioElement.pause();
    this.setState({isPlaying: false});
  }
  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({currentSong: song});
}
  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    }
    else {
    if (!isSameSong) {this.setSong(song); }
      this.play();
    }
  }
  _onMouseEnter(song) {
    this.setState ({
    hoveredSong: className= "ion-play"
  });
}

_onMouseLeave(song) {
  this.setState ({
    hoveredSong: null
  });
}

_onMousePause(song) {
  this.setState({
    hoveredSong: className= "ion-pause"
  });
}

  getIconForSong(song) {
    const isHovered = this.state.currentSong === hoveredSong;

    if (this.state.isHovered  && !isPlaying) {
     return  ( _onMouseEnter(song));
    }
    if else {
        (this.state isHovered && isPlaying) {
        return  (_onMousePause(song));
    }
  }
    else {
    return (this.hoveredSong ())
        }
      }

  render(); {

    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
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
      {
         this.state.album.songs.map( ( song, songIndex ) => (
           <tr className="song" key={songIndex} onClick={() => this.handleSongClick(song)} >
            <td>{songIndex+1}</td>
            <td>{song.title}</td>
            <td>{song.duration}</td>
            <td onMouseEnter={() => this._onMouseEnter(song)}>
            {this.getIconForSong(song)}</td>
            </td>
          </tr>
          )
        )
      }
          </tbody>
        </table>
    </section>
    );
  }

export default Album;
