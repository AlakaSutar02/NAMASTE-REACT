import React from "react";

class UserClass extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "Alka",
        age: 30,
        email: "alakasutar02@gmail.com",
      },
    };
  }

  async componentDidMount() {
    // This method is called after the component has been mounted.
    // It is a good place to fetch data or perform any setup that requires the component to be in the DOM.
    // For example, you might want to fetch user data from an API.
    // This is a placeholder for the componentDidMount method.
    console.log("componentDidMount : Component has been mounted");
    const data = await fetch("https://api.github.com/users/alakasutar02");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    // This method is called after the component has been updated.
    // It can be used to perform actions based on changes in state or props.
    // For example, you might want to fetch new data or update the UI based on new props.
    // This is a placeholder for the componentDidUpdate method.
    console.log("componentDidUpdate : Component has been updated");
  }
  componentWillUnmount() {
    // This method is called just before the component is removed from the DOM.
    // It is a good place to clean up any resources, such as timers or event listeners.
    // This is a placeholder for the componentWillUnmount method.
    console.log(
      "componentWillUnmount : Component is being removed from the DOM"
    );
  }
  render() {
    const { name, company, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>Class Component</h1>
        <h2>User Details : </h2>
        <img
          src={avatar_url}
          alt="User Avatar"
          style={{ width: "100px", height: "100px" }}
        />
        <h3>Name : {name}</h3>
        <h3>Company : {company}</h3>
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserClass;
