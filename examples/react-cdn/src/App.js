import React from 'react';
import './App.css';

const dbr = window.dbr;
dbr.licenseKey = 'LICENSE-KEY';
const scanner = new dbr.Scanner({
    onFrameRead: results => { console.log(results); }, // eslint-disable-line
    onNewCodeRead: (txt, result) => { alert(txt); } // eslint-disable-line
});

class App extends React.Component {
  openScanner() {
    scanner.open();
  };
  render() {
    return ( 
      <div className="App">
        <button onClick={() => { this.openScanner() }}>open scanner</button>
      </div> 
    );
  };
}

export default App;
