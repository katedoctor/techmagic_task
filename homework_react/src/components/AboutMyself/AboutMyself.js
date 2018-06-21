import React from 'react';

const AboutMyself = (props) => {
  return (
      <div>
        <h3>{props.name} : <span>{props.description}</span></h3>
      </div>
  )
}

export default AboutMyself;