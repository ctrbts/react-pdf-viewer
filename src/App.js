import React, { Component } from 'react';
import './App.css';

import PDFViewer from './components/pdfviewer';
import PDFBackend from './backends/pdfbackend';

class App extends Component {
  constructor() {
    super();
    this.myViewer = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <PDFViewer
          ref={this.myViewer}
          backend={PDFBackend}
          src='/myPDF.pdf' />
      </div>
    );
  }
}

export default App;
