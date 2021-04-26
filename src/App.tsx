import React from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { Playlists } from './pages/Playlists';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Aplikacja React</h1>

            <Playlists></Playlists>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
