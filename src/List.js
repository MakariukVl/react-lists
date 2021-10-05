import React, { Component } from 'react';
import ListItem from './ListItem.js';
import AddItem from './AddItem.js';
const uuid = require('uuid');

class List extends Component {

  render() {
    var name = this.props.name;
    var items = this.props.items;

    if (items) {
      return (
        <div id={name} key={uuid.v4()}>
          <h3>{name} List</h3>
	<ul>
          {items.map(function(item) {
            return (
		    <li key={uuid.v4()}><ListItem item={item} key={uuid.v4()} /></li>
            )
          })}
	</ul>
          <AddItem idName={name} addItem={this.props.addItem.bind(this)} />
        </div>
      )
    }
    return (
      <div id={name} key={uuid.v4()}>
        <h3>{name} List</h3>
        <AddItem idName={name} addItem={this.props.addItem.bind(this)} />
      </div>
    )

  }
}

export default List;
