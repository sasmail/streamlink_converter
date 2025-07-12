import * as React from 'react'

function App() {
    return (
        <div className="app">
            <nav className="navbar">
                <a className="nav-link" href='www.music.apple.com'>Apple Music</a>
                <a className="nav-link" href="#">Spotify</a>
                <a className="nav-link" href="#">YouTube</a>
                <a className="nav-link" href="#">Tidal</a>
            </nav>
            <h1 className="heading">🚀 StreamLinkConverter3000 🚀</h1>
            <div className="inputSection">
                <input type="text" placeholder="Paste link here"/>
                <button>Convert</button>
            </div>
        </div>
    );
}

export default App;
