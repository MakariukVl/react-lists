import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
	super(props);
	this.state = { color: 'black' };
    }

    handleClick() {
	  // Implement this function!
      this.setState( this.state.color === 'black' ? { color: 'gray' } : { color: 'black' } );
    }

  render() {
    var item = this.props.item;
    var name = item.name;

    return (
	    <span onClick={this.handleClick.bind(this)} style={{color: this.state.color}} className="listItem">
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;

