import React from "react";

//import the Link component to use for linking prop information
import { Link } from "react-router-dom";
import "./app.css";
// define one single user card component
class Animal extends React.Component {
  render() {
    return (
      <div className='col-md-3' key={this.props.key}>
        <div class='card'>
          <div class='card-body' style={{ marginLeft: "12px" }}>
            <h2 class='card-title'>Name:{this.props.animal_name}</h2>
            <h2 class='card-title'>Age :{this.props.age}</h2>
            <h2 class='card-title'>Weight :{this.props.weight}</h2>
            <h2 class='card-title'>Type :{this.props.type}</h2>

            <p style={{ marginTop: "11px" }}> About</p>
            <p class='card-text'>{this.props.about}</p>

            <Link
              to={`/edit-animal/${this.props.id}`}
              class='btn btn-warning btn-controls'
            >
              Edit
            </Link>
            <button
              onClick={() => {
                this.props.handleDelete(this.props.id);
              }}
              class='btn btn-danger btn-controls'
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Animal;
