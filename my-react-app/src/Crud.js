import React from 'react'
import './App.css';
import { useState, useEffect } from 'react';

function Crud() {
  const MOCK_API_URL = 'https://64850950ee799e32162731ec.mockapi.io/trails';

  const [users, setUsers] = useState([{}]);

  const [newUserTrailName, setNewUserTrailName] = useState('');
  const [newUserTrailDifficulty, setNewUserTrailDifficulty] = useState('');
  const [newUserLocationofTrail, setNewUserLocationofTrail] = useState('');

  const [updatedTrailName, setUpdatedTrailName] = useState('');
  const [updatedTrailDifficulty, setUpdatedTrailDifficulty] = useState('');
  const [updatedLocationofTrail, setUpdatedLocationofTrail] = useState('');

  function getUsers() {
    fetch(MOCK_API_URL)
      .then((data) => data.json())
      .then((data) => setUsers(data));
  }

  useEffect(() => {
    getUsers();
  }, []);

  function deleteUser(id) {
    fetch(`${MOCK_API_URL}/${id}`, {
      method: 'DELETE',
    }).then(() => getUsers());
  }

  function postNewUser(e) {
    e.preventDefault();

    fetch(MOCK_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        trailName: newUserTrailName,
        trailDifficulty: newUserTrailDifficulty,
        locationofTrail: newUserLocationofTrail,
      }),
    }).then(() => getUsers());
  }

  function updateUser(e, userObject) {
    e.preventDefault();

    let updatedUserObject = {
      ...userObject,
      trailName: updatedTrailName,
      trailDifficulty: updatedTrailDifficulty,
      locationofTrail: updatedLocationofTrail,
    };

    fetch(`${MOCK_API_URL}/${userObject.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedUserObject),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => getUsers());
  }

  return (
    <div className="App">
      <form>
        <h3>Post a Trail Choice</h3>
        <label>Trail Name</label>
        <input onChange={(e) => setNewUserTrailName(e.target.value)} />
        <label>Trail Difficulty</label>
        <input onChange={(e) => setNewUserTrailDifficulty(e.target.value)} />
        <label>Location of Trail</label>
        <input onChange={(e) => setNewUserLocationofTrail(e.target.value)} />
        <button onClick={(e) => postNewUser(e)}>Submit</button>
      </form>

      {users.map((user, index) => (
        <div className="userContainer" key={index}>
          <div>
            trail Name: {user.trailName} <br />
            trail Difficulty: {user.trailDifficulty} <br />
            location of Trail: {user.locationofTrail} <br />
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
          <form>
            <h3>Update Ride Preference</h3>
            <label>Update Trail Name</label>
            <input onChange={(e) => setUpdatedTrailName(e.target.value)} />
            <br />

            <label>Update Trail Difficulty</label>
            <input onChange={(e) => setUpdatedTrailDifficulty(e.target.value)} />
            <br />

            <label>Location of Trail</label>
            <input onChange={(e) => setUpdatedLocationofTrail(e.target.value)} />
            <br />
            <button onClick={(e) => updateUser(e, user)}>Update</button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default Crud;
