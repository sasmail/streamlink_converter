import * as React from 'react'
import {BackendRequest} from "./BackendRequest";

// function checking if URL is valid
function isValidURL(link: string) {
    if (
        link.includes('http://') ||
        link.includes('https://') ||
        link.includes('www.')
    )
        return 'Link is valid!';
    else {
        return 'Link is not valid!';
    }
}

function whichStreamingService(link: string) {
    const lowerLink = link.toLowerCase();
    if (lowerLink.includes('apple.com')) {
        const service = new BackendRequest('apple', link);
        return service;
    } else if (lowerLink.includes('spotify.com')) {
        const service = new BackendRequest('spotify', link);
        return service;
    } else if (lowerLink.includes('youtube.com')) {
        const service = new BackendRequest('youtube', link);
        return service;
    } else if (lowerLink.includes('tidal.com')) {
        const service = new BackendRequest('tidal', link);
        return service;
    } else {
        return 'No streaming service found!';
    }
}

function handleConvertClick() {
    const inputField = document.getElementById('inputField') as HTMLInputElement;
    const link = inputField.value;
    if (isValidURL(link)) {
        const result = whichStreamingService(link)
        if (typeof(result) === 'object') {
            // send to backend
            console.log(result);
        } else {
            return 'Something is wrong with the type of the result'
        }
    } else {
        return "Something is wrong with the link"
    }
}

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
                <input id="inputField" type="text" placeholder="Paste link here"/>
                <button onClick={handleConvertClick}>Convert</button>
            </div>
        </div>
    );
}

export default App;
