import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../App.css';

function LoginForm() {

    const navigate = useNavigate();

  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedUserName, setSelectedUserName] = useState("");
  const [selectedPassword, setSelectedPassword] = useState("");

  const selectBranch = (branchName) => {
    setSelectedBranch(branchName.target.value);
    alert(selectedBranch);
  }

  const changeUserName = (username) => {
    setSelectedUserName(username);
  }

  const changePassword = (password) => {
    setSelectedPassword(password);    
  }

  const checkCredential = () => {
    let newName = selectedUserName;
    let pass = selectedPassword;
    console.log(newName, pass);

    // Use history.push to navigate to another route
    navigate('/dashboard');
  }

  return ( 
  <div className="App">
      <header className="App-header">
        <h1>Star Jewellery and Pawning Canter</h1>
      </header>

      <div id='frameDiv'></div>
    <div id='subDiv'>
      <div class="grid-container">
      <div class="grid-item">
        <h3 className='smallTitleOne'>Branch</h3>
        </div>
      <div class="grid-item">
        <select id='branchDropdown' className='dropdown' onChange={selectBranch}>
        <option value='aralaganvila'>Aralaganvila</option>
        <option value='sewanapitiya'>Sewanapitiya</option>
        <option value='welikanda'>Welikanda</option>
      </select>
      </div>
      <div class="grid-item">
      <h3 className='smallTitleTwo'>UserName</h3>
      </div>
      <div class="grid-item">
      <input id='inputOne' className='textInput' placeholder=' username' onChange={changeUserName}></input>
      </div>
      <div class="grid-item">
      <h3 className='smallTitleThree'>Password</h3>
      </div>
      <div class="grid-item">
      <input id='inputTwo' className='textInput' placeholder=' password' type='password' onChange={changePassword}></input>
      </div>
    </div>

    <button id='loginBtn' onClick={checkCredential}><h2><b>Log In</b></h2></button>

  </div>


  </div>
      
  );
}
export default LoginForm;