import React from 'react';
import './app.css';
import Header from './header.js';
import Footer from './footer.js';
import Main from './main.js';
import data from './assets/data.json';
import SelectedBeast from './selectedbeast';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      allBeasts: data,
      displayModal: false,
      selectedBeast: {},
    }
  }

  displayAsModal = (name) => {
    const selectedBeast = data.find(beast => beast.title === name);
    this.setState({ selectedBeast, displayModal: true });
  }

  handleClose = () => {
    this.setState({ displayModal: false });
  }


  render(){
    return (
      <div className="App">
        <Header />
        <Main  
          allBeasts={this.state.allBeasts} 
          displayAsModal={this.displayAsModal}
        />
        <SelectedBeast 
          selectedBeast={this.state.selectedBeast}
          show={this.state.displayModal}
          handleClose={this.handleClose}
        />
        <Footer />

      </div>
    );
  }
}

export default App;
