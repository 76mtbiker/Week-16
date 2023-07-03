import React from 'react'
import {Button} from 'react-bootstrap'


function Button() {
  return (
    <div>
      <Button variant ='primary' onClick={handleClick}>Click Me</Button>
    </div>
  );
}

function handleClick() {
  console.log('Button clicked!');
}
