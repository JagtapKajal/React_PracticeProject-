import React, { useState } from "react";

const FormHandling = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your form submitted Successfully..." + name);
    setName("");
    setCity("");
    setEmail("");                      
    setPassword("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Login Form</h1>
          Name :{" "}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <h3>{name}</h3>
        </div>
        <div>
          City :{" "}
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
          />
          <h4>{city}</h4>
        </div>
        <div>
          Email :{" "}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h3>{email}</h3>
        </div>
        <div>
          Password :{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <h3>{password}</h3>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default FormHandling;
