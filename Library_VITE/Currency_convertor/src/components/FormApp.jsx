import { useState } from "react";
import "../css/FormApp.css";

function FormApp() {
  const [userData, setuserData] = useState({
    username: "",
    email_id: "",
    age: "",
    password: "",
    cnf_password: "",
  });

  const handler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setuserData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    if (
      userData.username == "" ||
      userData.email_id == "" ||
      userData.age == "" ||
      userData.password == "" ||
      userData.cnf_password != userData.password
    ) {
      alert("please fill the form correctly");
    } else {
        alert("form submitted")
      }
      
  };

  return (
    <>
      <form> Registration form
        <input
          placeholder="Name"
          type="text"
          name="username"
          id="1"
          value={userData.username}
          onChange={handler}
        />
        <input
          placeholder="Email"
          type="text"
          name="email_id"
          id="2"
          value={userData.email_id}
          onChange={handler}
        />
        <input
          placeholder="Age"
          type="text"
          name="age"
          id="3"
          value={userData.age}
          onChange={handler}
        />
        <input
          placeholder="Password"
          type="text"
          name="password"
          id="4"
          value={userData.password}
          onChange={handler}
        />
        <input
          placeholder="Confirm Password"
          type="text"
          name="cnf_password"
          id="5"
          value={userData.cnf_password}
          onChange={handler}
        />
        <input
          type="submit"
          value="Submit"
          id="submit"
          onClick={handleSubmit}
        />
      </form>
    </>
  );
}

export default FormApp;
