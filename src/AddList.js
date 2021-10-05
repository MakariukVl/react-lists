import React, { Component } from 'react';

class AddList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newList: 'noname'      
    };
  }

  handleSubmit(e) {
    e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

    // Implement the rest of this function here!
    this.setState(
      {newList: this.addListInputNode.value},
      () => {
        this.props.addList(this.state);
      });
  }

  render() {
    return (
      <div id="addListDiv">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div id="addList">
            <label>
              What will be on your next list?&nbsp;
              <input
                type="text"
                ref={v => (this.addListInputNode = v)}
                id="newID"
                pattern="^[A-Z$_]{1}[A-Za-z0-9]*$"
                defaultValue=""
                placeholder="List Name"
              ></input>
            </label>
          </div>
          <br />
          <input type="submit" value="Create List" />
        </form>
      </div>
    );
  }
}

export default AddList;
