import React, { Component } from 'react';


class Landing extends Component {

  componentDidMount () {
    this.props.change_page_state ("landing");
  }
  render () {
    return (
  <section className="landing mdl-grid">
    <section className="mdl-grid mdl-cell mdl-cell--12-col landing-page-background">
    </section>
    <section className="selling-points mdl-grid mdl-cell mdl-cell--12-col">
      <div className="point mdl-cell mdl-cell--4-col">
        <i className="fas fa-music fa-5x"></i>
        <h4 className="point-title">Choose your music</h4>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point mdl-cell mdl-cell--4-col">
      <i className="fas fa-wifi fa-5x"></i>
        <h4 className="point-title">Unlimited, streaming, ad-free</h4>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point mdl-cell mdl-cell--4-col">
      <i class="fas fa-mobile-alt fa-5x"></i>
        <h4 className="point-title">Mobile enabled</h4>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
  </section>
    )
  }
}

export default Landing;
