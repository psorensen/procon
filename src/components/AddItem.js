import React from "react";

class AddItem extends React.Component {
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  myref = React.createRef();
  handleOnChange(e) {
    const val = e.target.value;
    this.props.onChangeInput(val);
  }
  handleKeyPress(e) {
    const val = this.myref.current.value;
    if (e.key === "Enter") {
      this.props.addListItem(val);
    }
    if (e.key === " ") {
      this.props.updateType(val);
    }
  }
  render() {
    return (
      <React.Fragment>
        <input
          className={this.props.type}
          ref={this.myref}
          value={this.props.inputVal}
          onChange={this.handleOnChange}
          onKeyPress={this.handleKeyPress}
          type="text"
        />
      </React.Fragment>
    );
  }
}

export default AddItem;
