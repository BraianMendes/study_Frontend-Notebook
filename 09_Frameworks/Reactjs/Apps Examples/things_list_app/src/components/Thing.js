import React from 'react'
const Thing = (props) => (
  <div>
    <div className="card" onClick={ () =>   
      props.handleClick(props.thing)}>
        <div className="card-body">
          <img src={`${props.thing.image}`} width={150} height={100}></img>
          <p className="card-text">
            {`${props.thing.name}`} 
          </p>
        </div>
      </div>
    </div>
);
export default Thing