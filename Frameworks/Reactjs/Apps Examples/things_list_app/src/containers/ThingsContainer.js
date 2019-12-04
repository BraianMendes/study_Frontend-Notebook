import React, { Component } from 'react';
import Thing from '../components/Thing'
class ThingsContainer extends Component {
  render() {
    return (
      <div>
        <h2>Guilty Pleasures 😍</h2>
          {
			this.props.things.map(
				thing => 	<Thing 
								thing={thing} 
								key={thing.id}	
								handleClick={this.props.addThing}
							/>
			)
          }
      </div>
    );
  }
}
export default ThingsContainer;