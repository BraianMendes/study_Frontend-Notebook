import React, { Component } from 'react';
import Thing from '../components/Thing'
class QuitContainer extends Component {
   render() {
     return (
       <div>
         <h2>Things I Need to Quit 🚫</h2>
         {
           this.props.quitList.map((thing, index) =>
             <Thing 
             	thing={thing}
               	key={`${thing.name}-${index}`}
               	handleClick={this.props.removeThing}
             />)
         }
       </div>
      );
   }
}
export default QuitContainer;