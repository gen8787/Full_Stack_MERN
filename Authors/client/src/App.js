import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';

//==   C O M P O N E N T S   ==||
import CreateAuthor from './components/CreateAuthor';
import AllAuthors from './components/AllAuthors';
import OneAuthor from './components/OneAuthor';
import UpdateAuthor from './components/UpdateAuthor'

function App() {
  return (
    <div className="App">
      <h1>Authors</h1>
      <Link to="/new">Add New Author</Link>
      <span> | </span>
      <Link to="/">All Authors</Link>
      <hr/>

      <Router>
        <CreateAuthor path="/new" />
        <AllAuthors path="/" />
        <OneAuthor path="/:id" />
        <UpdateAuthor path="/:id/update" />
      </Router>
    </div>
  );
}

export default App;