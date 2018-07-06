import React from "react";

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <div className="pros">
          {this.props.data.pro.map((pro, index) => {
            return <h3 key={index} className="list-item-pro">{pro}</h3>;
          })}
        </div>
        <div className="cons">
          {this.props.data.con.map((con, index) => {
            return <h3 key={index} className="list-item-con">{con}</h3>;
          })}
        </div>
      </div>
    );
  }
}

export default List;
