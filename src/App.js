import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState } from 'react';


function App() {
  const [userRegister, setUserRegister]=useState({
    first_name:'',
    last_name:'',
    email:'',
    password:''
  });

  const handleChange=(event)=>{
    setUserRegister({
      ...userRegister,
      [event.target.name]: event.target.value
    })
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://3.140.210.76:8000/api/user/', userRegister)
      .then((res) => {
          console.log(res.data)
      }).catch((error) => {
          console.log(error)
      });
  }

  return (
    <div className='container'>

    <form className='col-sm-4' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>First name: </label>
        <input type="text" value={userRegister.first_name} className='form-control' name="first_name" onChange={handleChange} />
      </div>

      <div className='form-group'>
        <label>Last name: </label>
        <input type="text" value={userRegister.last_name} className='form-control' name="last_name" onChange={handleChange} />
      </div>

      <div className='form-group'>
        <label>Email: </label>
        <input type="email" value={userRegister.email} className='form-control' name="email" onChange={handleChange} />
        </div>
    
      <div className='form-group'>
        <label>Password: </label>
        <input type="password" value={userRegister.password} className='form-control' name="password" onChange={handleChange} />
        </div>

        <input type="submit" value="Submit" />
</form>
</div>
  );
}

export default App;
