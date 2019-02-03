import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from "./AddNinja"
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
        <AddNinja />
      </div>
    );
  }
}

export default App;
