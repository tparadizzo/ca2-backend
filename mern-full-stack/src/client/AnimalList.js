import React, { Component } from "react";
//import the Link component to handle React Router
import { Link } from "react-router-dom";
import Animal from "./Animal";
//Axios is a lightweight HTTP client based on the $http service within Angular.js
//Axios provides support for request and response interceptors, transformers and auto-conversion to JSON
// Use "npm install axios" command to install
import axios from "axios";
import "./app.css";
// import stylesheet
//MAKE SURE TO INSTALL USING npm install bulma
import "bulma/css/bulma.css";

// this component will handle all elements in the users array
class AnimalList extends Component {
  constructor(props) {
    super(props);
    // store the users array in the state
    this.state = { users: [] };

    //this binding is necessary to make `this` work in the callback
    //generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
    this.updateUsers = this.updateUsers.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // fetch all user data from the server when the component mounts
  componentDidMount() {
    this.updateUsers();
  }

  //
  updateUsers() {
    // get the users API using axios GET request to the server
    axios
      .get("api/animals")
      .then((response) => {
        //store the response in the state
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleDelete(animalID) {
    // make a DELETE request to the server which will handle the removal of the user with the specific userId
    axios
      .delete("api/animals", {
        data: {
          id: animalID,
        },
      })
      .then((response) => {
        //if the deletion was successful then re-render the list of users
        this.updateUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // produce a User component for each user object
    const animalsList = this.state.users.map((u) => (
      //map through each element in the array and set to the value received from the server
      <Animal
        key={u._id}
        id={u._id}
        animal_name={u.animal_name}
        type={u.type}
        weight={u.weight}
        age={u.age}
        about={u.about}
        //you must include the handleDelete method to use in child components
        handleDelete={this.handleDelete}
      />
    ));

    //return the list of users
    return (
      <div className='is-fluid'>
        {/*Navigation bar*/}
        <nav className='navbar'>
          <h1 className='heading-animal'>List of Animals</h1>
          {/*when this button is pressed, CreateUser component will be rendered by using React Router*/}
          <Link to={"/create-animal"} className='navbar-item navbar-end'>
            <button className='btn btn-primary' type='button'>
              Create new Animal
            </button>
          </Link>
        </nav>
        <hr />
        {/*USER LIST*/}
        <div className='container'>
          <div className='row'>{animalsList}</div>
        </div>
        {/*FOOTER*/}
      </div>
    );
  }
}

export default AnimalList;
