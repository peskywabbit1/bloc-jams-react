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
      <div class="demo-layout-transparent mdl-layout mdl-js-layout">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">Title</span>
            <div class="mdl-layout-spacer"></div>
              <nav class="mdl-navigation">
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
              </nav>
              <nav>
              <h1>Bloc Jams</h1>
                <Link to='/'>Landing</Link>
                <Link to='/library'>Library</Link>
              </nav>
        </div>
      </header>
      <main class="mdl-layout__content">
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/album/:slug" component={Album} />
      </main>
      </div>
    </div>

    );
  }
}

export default App;
