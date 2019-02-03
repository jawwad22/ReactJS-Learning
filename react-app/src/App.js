import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  state={
    ninjas:[
      {name:'RYU',age:30,belt:'black belt',id:1},
      {name:'jawwad',age:23,belt:'black belt',id:2},
      {name:'osama',age:30,belt:'black belt',id:3}
      
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
