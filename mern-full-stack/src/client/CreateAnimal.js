import React, { Component } from "react";
import axios from "axios";
import "./app.css";
//Create User component that will create a new user card
class CreateUser extends Component {
  constructor(props) {
    super(props);
    // the form fields are stored in a state
    this.state = {
      animal_name: "",
      type: "Mammals",
      weight: "",
      age: 0,
      about: "",
    };

    //this binding is necessary to make `this` work in the callback
    //generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //once the input boxes are changed, update the state to match the value
  handleChange(event) {
    //name of the input boxes must match the property names in the state
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    //preventDefault() is called on the event when it occurs to prevent a browser reload/refresh
    event.preventDefault();

    //use axios to send a POST request to the server which includes the state information for the new user to be created
    axios
      .post("/api/animals", this.state)
      //on success go to home
      .then((res) => this.props.history.push("/"))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // remember that the name of the input fields should match the state
    return (
      <>
        <div>
          <h4 className='text-center heading-animal'>Add Animal</h4>
        </div>
        <div className='col-md-3'></div>
        <form
          class='form-horizontal col-md-6 add-animal-form '
          onSubmit={this.handleSubmit}
        >
          <div class='form-group'>
            <label class='col-md-3 control-label' htmlFor='animal_name'>
              Animal Name
            </label>
            <div class='col-md-9'>
              <input
                id='animal_name'
                name='animal_name'
                value={this.state.animal_name}
                onChange={this.handleChange}
                class='form-control input-md'
                type='text'
              />
            </div>
          </div>

          <div class='form-group'>
            <label class='col-md-3 control-label' htmlFor='animal_name'>
              Age
            </label>
            <div class='col-md-9'>
              <input
                id='age'
                name='age'
                value={this.state.age}
                onChange={this.handleChange}
                class='form-control input-md'
                type='text'
              />
            </div>
          </div>
          <div class='form-group'>
            <label class='col-md-3 control-label' htmlFor='animal_name'>
              Weight
            </label>
            <div class='col-md-9'>
              <input
                id='weight'
                name='weight'
                value={this.state.weight}
                onChange={this.handleChange}
                class='form-control input-md'
                type='text'
              />
            </div>
          </div>

          <div class='form-group'>
            <label class='col-md-3 control-label' htmlFor='animal_categorie'>
              Type
            </label>
            <div class='col-md-9'>
              <select
                onChange={this.handleChange}
                name='type'
                className='form-control'
                value={this.state.type}
                id='type'
              >
                <option value='Mammals'>Mammals</option>
                <option value='Birds'>Birds</option>
                <option value='Reptiles'>Reptiles</option>
                <option value='Fish'>Fish</option>
                <option value='Invertebrates'>Invertebrates</option>
              </select>
            </div>
          </div>

          <div class='form-group'>
            <label class='col-md-3 control-label' htmlFor='animal_description'>
              About
            </label>
            <div class='col-md-9'>
              <textarea
                class='form-control'
                id='about'
                name='about'
                value={this.state.about}
                onChange={this.handleChange}
              ></textarea>
            </div>
          </div>

          <div class='form-group'>
            <div className='col-md-5'></div>
            <div class='col-md-4'>
              <button type='submit' class='btn btn-primary'>
                Add Animal
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default CreateUser;
