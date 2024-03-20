import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {

  constructor(props){
    super(props);

    // console.log("Parent Constructor")
  }
  componentDidMount(){
    // console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div className="about">
        <h1>About Component</h1>
        {/* Calling Components with props */}
        <UserClass name={"Lokesh Singh (function)"} location={"Bhopal"} />
      </div>
    );
  }
}

export default About;
