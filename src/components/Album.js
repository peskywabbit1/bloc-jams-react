import React, { Component } from 'react';
import albumData from './../data/albums';


class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album
    };
  }
    render() {
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
            this.state.albums.songs.map( (album, song) =>
            <Link to={`/album/${album.index.song}`} key={song}>
            <tr {this.state.album.song.title.duration}> key={Blue} </tr>
            <tr {this.state.album.song.title.duration}> key={Green} </tr>
            <tr {this.state.album.song.title.duration}> key={Red} </tr>
            <tr {this.state.album.song.title.duration}> key={Pink} </tr>
            <tr {this.state.album.song.title.duration}> key={Magenta} </tr>
            </Link>
        )
      }

          </tbody>
        </table>
    </section>
    );
  }
}

export default Album;
