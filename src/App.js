import "./App.css"
import React, { useState } from "react";
function App() {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault();

    const data = { email, password };
    
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    };

    fetch('http://192.168.88.122:8000/api/v1/menlist', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  function onEmailChange(e) {
    setEmail(e.target.value)
  }

  function onPasswordChange(e) {
    setPassword(e.target.value)
  }
  return (
    <div className="login">
      <form className="form__login">
        <h1 className="login__title">Вход</h1>
        <div className="login__group">
          <input className="login__input" placeholder="Логин" value={email} onChange={onEmailChange}/>
          <label htmlFor="" className="login__label"></label>
        </div>
        <div className="login__group">
          <input className="login__input" placeholder="Пароль" type="password" value={password} onChange={onPasswordChange}/>
          <label htmlFor="" className="login__label"></label>
        </div>
        <div className="btn">
        <button className="login__button" onClick={handleSubmit}><a href="#" className="button__link">Войти</a></button>
        </div>
        
      </form>
    </div>
  );
}

export default App;
