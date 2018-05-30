import React, { Component } from 'react';
import './App.css';
import Puppy from './components/Puppy'

class App extends Component {
  state = {
    puppies: []
  }

  componentWillMount = async () => {
    // console.log("Hello")
    const response = await fetch('/api/puppies')
    const json = await response.json()
    console.log(json.puppies)
    if (json.puppies) this.setState({puppies: json.puppies});
  }
  render() {
    const puppies = this.state.puppies.map( puppy => {
      return <Puppy key={puppy.id} puppy={puppy} />;
    });
    return (
      <div className="App">
        {puppies}
      </div>
    );
  }
}

export default App;
