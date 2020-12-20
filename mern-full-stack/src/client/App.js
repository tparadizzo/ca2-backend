import React from "react";
import { HashRouter, Route } from "react-router-dom";
//import required components
import CreateAnimal from "./CreateAnimal";
import EditAnimal from "./EditAnimal";
import AnimalList from "./AnimalList";

// this is the "main" component which sets up the React Router and respective routes
const App = () => {
  return (
    <HashRouter>
      <div>
        {/*SERVERSIDE: Link the routes to components*/}
        <Route exact path='/' component={AnimalList} />
        {/*pass the id through the EditUser component*/}
        <Route path='/edit-animal/:id' component={EditAnimal} />
        {/*set the path to create a new user to CreateUser component*/}
        <Route path='/create-animal' component={CreateAnimal} />
      </div>
    </HashRouter>
  );
};

export default App;
