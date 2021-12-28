import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render() {
    return(
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;
