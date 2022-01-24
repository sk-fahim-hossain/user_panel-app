import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const names = [{name:"jowel",age:"12"}, {name:"fahim",age:"35"},{name :'rahim',age:"24"}]
  return (
    <div className="App">
    <Users></Users>

    {
      names.map(fnd =><li>{fnd.name}</li>)
    }


    {
      names.map(fnd =><Friend name={fnd.name} age={fnd.age}></Friend>)
    }

   

   <Friend></Friend>

    </div>
  );
}

function Friend(props){
  const [nayok, setNayok] = useState([])
  useEffect(() => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setNayok(data))
  },[])


  const style ={
    border: '1px solid lightgrey',
    borderRadius: '5px',
    width: '200px',
    height: '200px',
    backgroundColor: 'white',
    padding: '100px auto',
    margin: '20px'
  }
  return (
    <div style={style}>
      <h3>Name:{props.name}</h3>
      <h4>Age:{props.age}</h4>
      
    </div>
  )
}

function Users() {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return (
    <div>
      <h2>Dynamic Users</h2>
      <h4>Count:{user.length}</h4>
      {
        user.map(singleUser =>
          <div>
          <p><b>{singleUser.name}</b></p>
          <p>Email:{singleUser.email}</p>
          </div>
        )
      }
    </div>
  )
}

export default App;
