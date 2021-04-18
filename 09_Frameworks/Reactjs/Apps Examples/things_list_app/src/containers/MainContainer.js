import React, { Component } from 'react';
import ThingsContainer from './ThingsContainer'
import QuitContainer from './QuitContainer'

class MainContainer extends Component {
state = {
  things: [],
  quitList: []
}

componentDidMount(){
  fetch("http://localhost:3000/things")
    .then(res => res.json())
    .then(thingsData =>
      this.setState({
        things: thingsData
      }))
}

addThing = (thing) => {
   this.setState((prevState) => {
     return {
       quitList: [thing, ...prevState.quitList]
     }
   })
}
removeThing = (thing) => {
   let index = this.state.quitList.indexOf(thing)
   let copyQuitList = [...this.state.quitList]
   copyQuitList.splice(index,1)
   this.setState({
     quitList: copyQuitList
   })
}

render() {
  return (
    <div className="row">
      <div className="col-8">
        <ThingsContainer things={this.state.things} addThing={this.addThing}/>
      </div>
      <div className="col-4">
        <QuitContainer quitList={this.state.quitList}
		removeThing={this.removeThing}/>
      </div>
    </div>
  )
}

}
export default MainContainer;