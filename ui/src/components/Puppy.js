import React, {Component} from 'react';

class Puppy extends Component {
  render() {
    const {name, breed, weight} = this.props.puppy
    return (
      <div>
        <h3>{name}</h3>
        <p>{breed}, {weight} lbs.</p>
      </div>
    )
  }
}

export default Puppy
