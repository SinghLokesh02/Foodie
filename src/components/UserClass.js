import React, { Component } from "react";

export default class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "Dummy Image",
      },
    };
    // console.log(this.props.name, "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name, "Child Component Did Mount");

    //Api Call
    const data = await fetch("https://api.github.com/users/SinghLokesh02");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update is Called");
      this.RunMethod = setInterval(() => {
      console.log("React is Just Awesome 🔥❤️‍🔥");
    }, 1000);
  }

  componentWillUnmount(){
    console.log("Component Will Unmount is Called");
    clearInterval(this.RunMethod);
  }

  render() {
    const { name, location, public_repos, avatar_url } = this.state.userInfo;
    // console.log("Child RenderChild ");
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" id="Github_profile"/>
        <h1>Name : {name}</h1>
        <h2>City : {location}</h2>
        <h2>Repository : {public_repos}</h2>
        <h2>Age : 24</h2>
      </div>
    );
  }
}
