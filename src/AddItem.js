import React, { Component } from 'react';

class AddItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: {name: 'anonymous'},
      listID: this.props.idName
    }
  }

  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

      // Implement the rest of this function here!
      this.setState( 
        { newItem: { name: this.addNameInputNode.value } },
        () => {
          // console.log(this.state.listID, this.state.newItem.name);
          this.props.addItem(this.state);
        }
      );
  }
    

  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className='addItemDiv'>
      <h4>Add {this.props.idName}</h4>
      <form ref='form' onSubmit={this.handleSubmit.bind(this)}>
      <div id={divName} ref={divName}>
        <label>Name</label><br />
        <input type='text'
        ref={v => this.addNameInputNode = v} 
        defaultValue=""
        placeholder="Item Name" />
        </div>
        <br />
        <input type='submit' value='Submit' />
        <br />
      </form>
      </div>
    );
  }

}

export default AddItem;
