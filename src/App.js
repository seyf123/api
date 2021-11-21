import "./App.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';

import UserList from "./UserList";


function App() {

  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          
          console.log(response)
          setUser(response.data);
        })
        .catch(function (error) {
         
          console.log(error);
          setError(error);
        })
  }, []);
  

  return (
    <div className="App">
      <p className='head'>USERS:</p>
      {<UserList user={user}/>}
    </div>
  );
}

export default App;