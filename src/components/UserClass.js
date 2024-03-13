import React, { Component } from "react";

export default class UserClass extends Component {
    constructor(props){
        super(props);
    }
  render() {
    const {name,location} = this.props;
    return (
      <div className="user-card">
        <h1>Name : {name}</h1>
        <h2>City : {location}</h2>
        <h2>Age : 24</h2>
      </div>
    );
  }
}
