import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="demo-layout-transparent mdl-layout mdl-js-layout">
      <header className="mdl-layout__header mdl-layout__header--transparent">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Bloc Jams</span>
            <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <Link to = '/'>Landing</Link>
            <Link to = '/library'>Library</Link>
          </nav>
        </div>
      </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">
            <h1>Bloc Jams</h1>
            </span>
            <nav className="mdl-navigation">
            <Link to = '/'>Landing</Link>
            <Link to = '/library'>Library</Link>
            </nav>
          </div>
          <main>
            <div className="mdl-layout__content">
            <Route exact path="/" component={Landing} />
            <Route path="/library" component={Library} />
            <Route path="/album/:slug" component={Album} />
            </div>
          </main>
        </div>
        </div>
    );
  }
}

export default App;
