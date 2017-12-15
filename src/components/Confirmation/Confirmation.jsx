import React from 'react';

const Confirmation = (props) => {
  return (
    <div className="center">
      <h1>Congratulations {props.user.name}! Beer is on the way!</h1>
      </div>
  )
}

export default Confirmation