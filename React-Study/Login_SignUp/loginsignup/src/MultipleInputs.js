import React, { useState } from "react";
//Registration form
const MultipleInputs = () => {
  const [userRegister, setUserRegister] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserRegister({ ...userRegister, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...userRegister, id: new Date().getTime().toString() };
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setUserRegister({ username: "", email: "", phone: "", password: "" });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Fullname</label>
          <input
            type="text"
            autocomplete="off"
            value={userRegister.username}
            onChange={handleInput}
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="text"
            autocomplete="off"
            value={userRegister.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phone">phone</label>
          <input
            type="text"
            autocomplete="off"
            value={userRegister.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            autocomplete="off"
            value={userRegister.password}
            onChange={handleInput}
            name="password"
            id="password"
          />
        </div>
        <button type="submit">Registration</button>
      </form>
      <div>
        {/* {records.map((currElem) => {
          return (
            <div className="showDataStyle" key={currElem.id}>
              <p>{currElem.username}</p>
              <p>{currElem.email}</p>
              <p>{currElem.phone}</p>
              <p>{currElem.password}</p>
            </div>
          );
        })} */}

        {records.map((currElem) => {
          const { id, username, email, phone, password } = currElem; //destructuring
          return (
            <div className="showDataStyle" key={id}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MultipleInputs;
