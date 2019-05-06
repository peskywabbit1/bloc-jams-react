import React, { Component } from 'react';


class Landing extends Component {

  componentDidMount () {
    this.props.change_page_state ("landing");
  }
  render () {
    return (
  <section className="landing mdl-grid">
    <section className="mdl-grid mdl-cell mdl-cell--12-col landing-page-background">
      <h1 className="hero-title">Turn the music up!</h1>
    </section>
    <section className="selling-points mdl-grid mdl-cell mdl-cell--12-col">
      <div className="point mdl-cell mdl-cell--4-col">
        <i className="fas fa-music fa-4x"></i>
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point mdl-cell mdl-cell--4-col">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point mdl-cell mdl-cell--4-col">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
  </section>
    )
  }
}

export default Landing;
