import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { current_page: ""};
  }
  change_page_state (new_page) {
    this.setState ( {current_page: new_page} )
  }
  render() {
    let background = "";
    if (this.state.current_page === "library") {
      background = "blur-background-library"
    }
    return (
      <div className="App">
        <div className={`${background} mdl-layout mdl-js-layout`}>
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Bloc Jams</span>
            <div className="mdl-layout-spacer"></div>
        </div>
      </header>
          <div className="mdl-layout__drawer">
            <span className="bloc-jams-title">
            <h4></h4>
            </span>

            <nav className="mdl-navigation">
              <Link to = '/'><h4>Landing</h4></Link><br/>
              <Link to = '/library'><h4>Library</h4></Link>
            </nav>
          </div>
          <main>
            <div className="mdl-layout__content">
            <Route exact path="/" render={(routeProps) => (<Landing {...routeProps} change_page_state={this.change_page_state.bind(this)} />) }/>
            <Route path="/library" render={(routeProps) => (<Library {...routeProps} change_page_state={this.change_page_state.bind(this)} />) }/>
            <Route path="/album/:slug" render={(routeProps) => (<Album {...routeProps} change_page_state={this.change_page_state.bind(this)} />) }/>
            </div>
          </main>
        </div>
        </div>
    );
  }
}

export default App;
