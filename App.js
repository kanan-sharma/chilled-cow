import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Overview from './components/Overview';
import Playlist from './components/Playlist';
import Featured from './components/Featured';
import Navbar from './components/Navbar';
import {backgrounds} from '@uprise/colors';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Navbar />
            <Route exact path ='/' component={Overview} />
            <Route exact path ='/playlist' component={Playlist} />
            <Route exact path ='/featured' component={Featured} />        
        </div>
      </Router>
    );
  }
}

export default App;
